import SiteOutlinkButton from "../../components/SiteOutlinkButton";
import preview1 from "/projects/Yurekan/preview_1.png";
import preview2 from "/projects/Yurekan/preview_2.png";
import preview3 from "/projects/Yurekan/preview_3.png";
import preview4 from "/projects/Yurekan/preview_4.png";
import preview5 from "/projects/Yurekan/preview_5.png";
import preview6 from "/projects/Yurekan/preview_6.png";

export default function YurekanProjectPage() {
  const previewImages = [
    preview1,
    preview2,
    preview3,
    preview4,
    preview5,
    preview6,
  ];
  return (
    <section className="px-[20px] md:px-[32px] flex flex-col gap-10">
      <h1 className="text-heading1">Yurekan</h1>
      <div className="flex flex-col gap-5 text-gray-400 xl:max-w-3/5 leading-7">
        <p>
          Yurekan is a platform service where users can easily find study or
          project teammates based on their roles. Users sometimes want to do
          studying or projects interacting with other people so that they can
          improve productivity. However, it is often hard to find where to
          start.
        </p>
        <p>
          Yurekan landing page is the first page where users can start with. As
          target customers are mostly young people (designers and developers), I
          created website design that is friendly to those aged users. Also, I
          included testimonials and FAQs to provide better understanding toward
          main customers.
        </p>
      </div>
      <SiteOutlinkButton
        disabled={false}
        to="https://yurekan.framer.website/"
      />
      <ul className="flex flex-col items-center gap-10">
        {previewImages.map((i, index) => (
          <>
            <li key={index}>
              <img src={i} alt={`Preview image #${index + 1}`} />
            </li>
            <hr className="border-gray-300 w-1/2" />
          </>
        ))}
      </ul>
    </section>
  );
}
