export default function AnnouncementBar({
  text = "Kanpur's First Zero Radiation Center  •  ",
  textColor = "#122056",
  textSize = "text-sm",
  wordSpacing = "0.2em",
}) {
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

      <div className="w-full bg-white marquee">
        <div className="py-1 marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className={`${textSize} font-medium mx-10`}
              style={{
                color: textColor,
                wordSpacing: wordSpacing,
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
