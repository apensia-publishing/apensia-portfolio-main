import SiteOutlinkButton from "../../components/SiteOutlinkButton";
import preview1 from "/projects/Fleam/preview_1.png";
import preview2 from "/projects/Fleam/preview_2.png";
import preview3 from "/projects/Fleam/preview_3.png";
import preview4 from "/projects/Fleam/preview_4.png";
import preview5 from "/projects/Fleam/preview_5.png";

export default function FleamProjectPage() {
  const previewImages = [preview1, preview2, preview3, preview4, preview5];

  return (
    <section className="px-[20px] md:px-[32px] flex flex-col gap-10">
      <h1 className="text-heading1">Fleam</h1>
      <div className="flex flex-col gap-5 text-gray-400 xl:max-w-3/5 leading-7">
        <p>
          Fleam is E-commerce platform for vintage styled clothes. There is an
          increasing needs in vintage styled clothes in South Korea, but many
          customers waste too much their time on searching vintage clothes that
          they prefer as there has been no E-commerce platform which specializes
          in vintage clothes.
        </p>
        <p>
          Fleam's core identity is trustworthiness, which means Fleam needs to
          provide information of vintage clothes correctly based on users'
          preferrences of style and price range. Therefore, I used blue color in
          order to deliver image of transparency and professionalism. Fleam logo
          is text-based logo with semibold italics style in order to make it
          more reliable.
        </p>
      </div>
      <SiteOutlinkButton to="https://fleam.framer.website/" disabled={false} />
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
