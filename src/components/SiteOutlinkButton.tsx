import { Link } from "react-router";
import { useRef } from "react";

type SiteOutlinkButtonProps = {
  to: string;
  disabled: boolean;
};

export default function SiteOutlinkButton({
  to,
  disabled,
}: SiteOutlinkButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  return (
    <Link
      ref={linkRef}
      to={to}
      className={`w-fit rounded-sm py-2 px-5 text-white ${
        disabled
          ? "bg-gray-400 pointer-events-none"
          : "bg-black hover:bg-green-600 duration-300"
      }`}
      target="_blank"
    >
      {disabled ? "Coming Soon" : "Page Preview"}
    </Link>
  );
}
