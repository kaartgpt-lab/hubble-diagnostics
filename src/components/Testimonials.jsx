import React, { useRef, useEffect, useState } from "react";
import testimonials from "../data/testimonials";

export default function Testimonials() {
  const containerRef = useRef();
  const firstSetRef = useRef();
  const [hovered, setHovered] = useState(false);
  const scrollSpeed = 0.5; // px per frame

  // Auto-scroll
  useEffect(() => {
    const container = containerRef.current;
    const firstSet = firstSetRef.current;
    if (!container || !firstSet) return;

    const firstSetWidth = firstSet.offsetWidth;

    let requestId;

    const step = () => {
      if (!hovered) {
        container.scrollLeft += scrollSpeed;

        if (container.scrollLeft >= firstSetWidth) {
          container.scrollLeft = 0;
        }
      }
      requestId = requestAnimationFrame(step);
    };

    step();

    return () => cancelAnimationFrame(requestId);
  }, [hovered]);

  // Drag/swipe
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollStart.current = containerRef.current.scrollLeft;
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const walk = e.pageX - startX.current;
    containerRef.current.scrollLeft = scrollStart.current - walk;
  };
  const handleMouseUp = () => (isDragging.current = false);
  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    scrollStart.current = containerRef.current.scrollLeft;
  };
  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const walk = e.touches[0].pageX - startX.current;
    containerRef.current.scrollLeft = scrollStart.current - walk;
  };
  const handleTouchEnd = () => (isDragging.current = false);

  // Buttons
  const scrollBy = (distance) => {
    containerRef.current.scrollLeft += distance;
  };

  return (
    <section className="w-full bg-gray-100 py-16 relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-8 text-center">
        What Our Patients Say
      </h2>

      <div
        ref={containerRef}
        className="flex gap-4 px-6 sm:px-12 w-full cursor-grab"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeaveCapture={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* First set of testimonials */}
        <div ref={firstSetRef} className="flex gap-4">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex-none w-72 sm:w-80 bg-white p-6 rounded-xl shadow-md"
            >
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{t.message}"
              </p>
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="font-semibold text-blue-950">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate for seamless scrolling */}
        <div className="flex gap-4">
          {testimonials.map((t, idx) => (
            <div
              key={"dup-" + idx}
              className="flex-none w-72 sm:w-80 bg-white p-6 rounded-xl shadow-md"
            >
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{t.message}"
              </p>
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="font-semibold text-blue-950">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <button
        onClick={() => scrollBy(-250)}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-950 hover:bg-blue-900 text-white p-2 sm:p-3 rounded-full shadow-md transition"
      >
        &#8592;
      </button>
      <button
        onClick={() => scrollBy(250)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-950 hover:bg-blue-900 text-white p-2 sm:p-3 rounded-full shadow-md transition"
      >
        &#8594;
      </button>
    </section>
  );
}
