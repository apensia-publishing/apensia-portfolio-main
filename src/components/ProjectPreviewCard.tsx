import { Link } from "react-router";

type ProjectPreivewCardProps = {
  projectTitle: string;
  bgColor: string;
  src: string;
  to: string;
};

export default function ProjectPreviewCard({
  projectTitle,
  bgColor,
  src,
  to,
}: ProjectPreivewCardProps) {
  return (
    <div>
      <h3 className="mb-5 text-xl font-semibold">{projectTitle}</h3>
      <Link
        to={to}
        className={
          `w-full aspect-video flex justify-center items-center` + ` ${bgColor}`
        }
      >
        <img src={src} alt="Project logo" className="w-[300px]" />
      </Link>
    </div>
  );
}
