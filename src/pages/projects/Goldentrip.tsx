import SiteOutlinkButton from "../../components/SiteOutlinkButton";

export default function GoldenTripProjectPage() {
  return (
    <section className="px-[20px] md:px-[32px] flex flex-col gap-10">
      <h1 className="text-heading1">Goldentrip</h1>
      <div className="flex flex-col gap-5 text-gray-400 xl:max-w-3/5 leading-7">
        <p>
          Goldentrip is a web service for Korean elderly to find the appropriate
          traveling packages easily and quickly. One special thing is that
          Goldentrip recommends elderly people based on their disease and
          perferrences so that they can choose which type of travel packages
          that they want. Goldentrip is now serviceable only in Busan area, but
          it will gradually expand to the Korea overall.
        </p>
        <p>
          Goldentrip is based on web based service, but it will move on to the
          mobile application so that elderly people can use it with ease.
        </p>
      </div>
      <SiteOutlinkButton to="" disabled={true} />
    </section>
  );
}
