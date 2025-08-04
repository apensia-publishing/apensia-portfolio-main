import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";

type ProjectPreivewCardProps = {
  projectTitle: string;
  bgColor: string;
  src: string;
  hoverBackground: string;
  to: string;
};

export default function ProjectPreviewCard({
  projectTitle,
  bgColor,
  src,
  to,
  hoverBackground,
}: ProjectPreivewCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch((error) => {
          console.log("Autoplay failed:", error);
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <div>
      <h3 className="mb-5 text-xl font-semibold">{projectTitle}</h3>
      <Link
        to={to}
        className="w-full aspect-video flex justify-center items-center relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Original Background with Logo */}
        <div
          className={`absolute inset-0 ${bgColor} flex justify-center items-center transition-all duration-250 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src={src}
            alt="Project logo"
            className="w-1/4 min-w-[150px] max-w-[300px] xl:w-[300px] transition-all duration-250"
          />
        </div>

        {/* Video Background */}
        <div
          className={`absolute inset-0 transition-all duration-250 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={hoverBackground} type="video/webm" />
          </video>
        </div>
      </Link>
    </div>
  );
}
