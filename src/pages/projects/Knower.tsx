import SiteOutlinkButton from "../../components/SiteOutlinkButton";
import preview1 from "/projects/Knower/preview_1.png";
import preview2 from "/projects/Knower/preview_2.png";
import preview3 from "/projects/Knower/preview_3.png";
import preview4 from "/projects/Knower/preview_4.png";
import preview5 from "/projects/Knower/preview_5.png";
import preview6 from "/projects/Knower/preview_6.png";

export default function KnowerProjectPage() {
  const previewImages = [
    preview1,
    preview2,
    preview3,
    preview4,
    preview5,
    preview6,
  ];

  return (
    <section className="px-[20px] md:px-[32px] pb-20 flex flex-col gap-10">
      <h1 className="text-heading1">Knower</h1>
      <div className="flex flex-col gap-5 text-gray-400 xl:max-w-3/5 leading-7">
        <p>
          Knower is a fashion brand of casual vintage clothes. Knower seeks for
          elegance within simplicity, comfortness within high quality. People
          who love Knower brand would be the one who want to get vintage clothes
          with qualitative functionality and understated beauty at the same
          time.
        </p>
        <p>
          In order to deliver founder's needs correctly, I created design of
          website as simple as possible with moderate tone colored, but tried to
          emphasize products' functionality and details so that products could
          be appealing to the users.
        </p>
      </div>
      <SiteOutlinkButton
        to="https://knower-official.framer.website/"
        disabled={false}
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
