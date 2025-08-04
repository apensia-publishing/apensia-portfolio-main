import SiteOutlinkButton from "../../components/SiteOutlinkButton";
import preview1 from "/projects/GoodMyTalk/preview_1.png";
import preview2 from "/projects/GoodMyTalk/preview_2.png";
import preview3 from "/projects/GoodMyTalk/preview_3.png";
import preview4 from "/projects/GoodMyTalk/preview_4.png";
import preview5 from "/projects/GoodMyTalk/preview_5.png";
import preview6 from "/projects/GoodMyTalk/preview_6.png";

export default function GoodMyTalkProjectPage() {
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
      <h1 className="text-heading1">GoodMyTalk</h1>
      <div className="flex flex-col gap-5 text-gray-400 xl:max-w-3/5 leading-7">
        <p>
          GoodMyTalk is an online platform where users can easily and quickly
          get legal consultation from various professionals. Often we confront
          many difficult situations where we need legal resolution but legal
          thing is always cumbersome for those who do not know very much and it
          is challenging for them where to start. With various types of legal
          experts and professionals' help, users can easily ask questinos and
          get response from them. For those who want to go further, they can
          request legal support by paying off extra charges.
        </p>
        <p>
          This landing page attracts users to see what GoodMyTalk service is all
          about. In order to expect higher rate of CTA (Call To Action), I
          included floating banner on bottom right corner of discount
          announcement and put action buttons on appropriate sections. For
          overall design, I chose bright colors with simple layout to deliver
          core messages effectively to users.
        </p>
      </div>
      <SiteOutlinkButton
        disabled={false}
        to="https://goodmytalk.framer.website/"
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
