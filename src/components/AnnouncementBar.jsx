export default function AnnouncementBar() {
  const text = "Kanpur's First  Zero Radiation Center \u00A0 • \u00A0";

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }

          .marquee {
            overflow: hidden;
            width: 100%;
            position: relative;
          }

          .marquee-track {
            display: flex;
            width: max-content;
            white-space: nowrap;
            animation: marquee 12s linear infinite;
          }
        `}
      </style>

      <div className="w-full bg-white text-[#2d69ff] marquee">
        <div className="py-1 marquee-track">
          {/* repeated enough times */}
          <span className="text-sm font-medium mx-6">{text}</span>
          <span className="text-sm font-medium mx-6">{text}</span>
          <span className="text-sm font-medium mx-6">{text}</span>
          <span className="text-sm font-medium mx-6">{text}</span>
          <span className="text-sm font-medium mx-6">{text}</span>
          <span className="text-sm font-medium mx-6">{text}</span>
          <span className="text-sm font-medium mx-6">{text}</span>
          <span className="text-sm font-medium mx-6">{text}</span>
        </div>
      </div>
    </>
  );
}