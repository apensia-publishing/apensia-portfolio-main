import { Link } from "react-router";
import Navigation from "../components/Navigation";
import { IconContext } from "react-icons/lib";
import { FaSass, FaReact, FaSlack } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiSupabase,
  SiMongodb,
  SiNotion,
  SiAdobepremierepro,
  SiVegas,
  SiFramer,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { BiLogoPostgresql, BiLogoFigma } from "react-icons/bi";
import {
  specializationData,
  projectPreviewCardData,
  linkData,
  webServicePreviewCardData,
} from "../utils/data/heroData";
import ProjectPreviewCard from "../components/ProjectPreviewCard";

export default function MainPage() {
  const techStacksData = [
    <SiTypescript />,
    <SiTailwindcss />,
    <FaSass />,
    <FaReact />,
    <RiNextjsFill />,
    <DiDjango />,
    <SiExpress />,
    <SiSupabase />,
    <BiLogoPostgresql />,
    <SiMongodb />,
    <BiLogoFigma />,
    <FaSlack />,
    <SiNotion />,
    <SiAdobepremierepro />,
    <SiVegas />,
    <SiFramer />,
  ];

  return (
    <>
      <Navigation />
      <main className="w-full xl:absolute xl:w-[calc(100vw-250px)] xl:right-0">
        <section
          id="about_me"
          aria-labelledby="title"
          className="hidden px-[20px] md:px-[32px] w-full h-[250px] border-b-[0.05px] border-b-gray-300 xl:flex"
        >
          <h1 className="text-5xl pt-13 font-normal leading-12">
            Apensia
            <br />
            Studio
          </h1>
        </section>
        <section
          id="hero"
          className="py-20 px-[20px] md:px-[32px] flex flex-col gap-20"
        >
          {/* Summary part */}
          <div className="flex flex-col gap-5">
            <h1 className="text-heading2 md:text-heading1">
              <span className="text-green-600 mr-5 font-semibold">01</span>
              About Me
            </h1>
            <p className="text-gray-400">
              Enthusiast who is eager for making better world and "benefiting
              for all" with creative idea and one line of code.
            </p>
          </div>

          {/* Specialized */}
          <div
            aria-labelledby="specialization"
            className="flex gap-10 flex-col md:flex-row xl:max-w-[90%] justify-between"
          >
            <h2 className="text-heading3">
              <span className="mr-3 font-semibold text-gray-400">1a</span>
              Specialization
            </h2>
            <ul className="flex flex-col gap-10">
              {specializationData.map((i) => (
                <li key={i.id} className="w-[500px]">
                  <h3 className="font-semibold">{i.title}</h3>
                  <p className="text-gray-400 mt-3">{i.p}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stacks */}
          <div
            aria-labelledby="tech_stacks"
            className="flex gap-10 justify-between flex-col w-full"
          >
            <h2 className="text-heading3">
              <span className="mr-3 font-semibold text-gray-400">1b</span>
              Tech Stacks
            </h2>
            <ul className="grid grid-cols-5 md:grid-cols-6 gap-10">
              {techStacksData.map((i, index) => (
                <li key={index} className="flex flex-1">
                  <IconContext.Provider value={{ size: "50" }}>
                    {i}
                  </IconContext.Provider>
                </li>
              ))}
            </ul>
          </div>

          {/* Info sections */}
          <div
            aria-labelledby="information"
            className="flex gap-10 justify-betweenf flex-col w-full"
          >
            <h2 className="text-heading3">
              <span className="mr-3 font-semibold text-gray-400">1c</span>
              Links
            </h2>
            <ul className="flex gap-10">
              {linkData.map((i) => (
                <li key={i.id}>
                  <Link to={i.to} className="underline" target="_blank">
                    {i.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Experience section */}
        <section
          aria-labelledby="experience"
          id="works"
          className="py-10 md:py-20 xl:pt-5 px-[20px] md:px-[32px] flex flex-col gap-20 border-t-[0.05px] border-t-gray-300"
        >
          <div className="flex flex-col md:flex-row justify-between">
            <h1 className="text-heading2 md:text-heading1">
              <span className="text-green-600 mr-5 font-semibold">02</span>Works
            </h1>
            <div className="flex flex-col gap-5 mt-3 text-gray-400 md:max-w-[400px] xl:max-w-[600px]">
              <p>
                Apensia studio's software development is not just a journey for
                one-time ending product manufacturing. Rather, it strives for
                sophisticated and trustful approach for your success in the
                future.
              </p>
              <p>
                Apensia studio deals with not only creating interactive and
                creative landing pages, but also other full-stack web services
                such as SaaS platform, E-commerce and so on.
              </p>
              <p>
                In order for delivering genuine company image and product detail
                and increasing CTA (Call To Action), Apensia studio adopts
                appropriate UIUX design that satisfies both functionality and
                your favor. It is regardless to say that Apensia studio also
                pays attention to responsive, cross-browsing and SEO (Search
                Engine Optimization) friendly website.
              </p>
            </div>
          </div>
          <div
            aria-labelledby="landing_pages"
            className="flex gap-10 justify-between flex-col w-full"
          >
            <h2 className="text-heading3">
              <span className="mr-3 font-semibold text-gray-400">2a</span>
              Landing Pages
            </h2>
            {projectPreviewCardData.map((i) => (
              <ProjectPreviewCard
                key={i.id}
                projectTitle={i.projectTitle}
                bgColor={i.bgColor}
                src={`/thumbnail/${i.id}_logo.svg`}
                hoverBackground={i.hoverBackground}
              />
            ))}
          </div>
          <div
            aria-labelledby="web_services"
            className="flex gap-10 justify-between flex-col w-full"
          >
            <h2 className="text-heading3">
              <span className="mr-3 font-semibold text-gray-400">2b</span>
              Web Services
            </h2>
            {webServicePreviewCardData.map((i) => (
              <ProjectPreviewCard
                key={i.id}
                projectTitle={i.projectTitle}
                bgColor={i.bgColor}
                src={`/thumbnail/${i.id}_logo.svg`}
                hoverBackground={i.hoverBackground}
              />
            ))}
          </div>
        </section>

        {/* Contact section */}
        <section
          aria-labelledby="experience"
          id="contact"
          className="py-10 md:py-20 xl:pt-5 px-[20px] md:px-[32px] flex flex-col gap-20 border-t-[0.05px] border-t-gray-300"
        >
          <div className="flex flex-col justify-between">
            <h1 className="text-heading2 md:text-heading1">
              <span className="text-green-600 mr-5 font-semibold">03</span>
              Contact
            </h1>
            <div className="flex flex-col gap-5 mt-3 text-gray-400 md:max-w-[400px] xl:max-w-[600px]">
              <p>For any inquiries, please send request through below email</p>
              <span className="text-3xl text-black">apensia914@gmail.com</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
