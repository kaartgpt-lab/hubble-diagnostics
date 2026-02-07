import { useState, useEffect, useRef } from 'react';

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const countRef = useRef(null);

  // Intersection Observer to detect when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 } // Triggers when 20% of the element is visible
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  // Animation Logic
  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    const endValue = parseInt(target.replace(/,/g, ''), 10);

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // easeOutExpo for a high-end feel
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeProgress * endValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, target, duration]);

  return <span ref={countRef}>{count.toLocaleString('en-IN')}</span>;
};

export default function NumbersSection() {
  const stats = [
    { value: "15", suffix: "+", label: "Years of Expertise" },
    { value: "100000", suffix: "+", label: "Patients Served" },
    { value: "100", suffix: "%", label: "Radiation-Free Care" },
    { value: "24", suffix: "-48 hrs", label: "Report Turnaround" },
  ];

  return (
    <section className="w-full py-20 bg-[#122056] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="text-3xl md:text-4xl font-bold mb-2">
              <Counter target={stat.value} />
              {stat.suffix}
            </div>
            <p className="text-sm md:text-base tracking-wide opacity-90 font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}