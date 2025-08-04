import { Outlet } from "react-router";

export default function ProjectDetailLayout() {
  return (
    <>
      <main className="w-full xl:absolute xl:w-[calc(100vw-250px)] xl:right-0 pt-20 md:pt-40 xl:pt-11">
        <Outlet />
      </main>
    </>
  );
}
