import Image from "next/image";

import Footer from "src/components/devchallenges.io/footer";
import { pt_serif, poppins } from "src/shared/fonts";

function Crew({
  image,
  title,
  name,
}: {
  image: string;
  title: string;
  name: string;
}) {
  return (
    <div className="pb-2 pl-2 pr-6 even:pt-20 md:[&:nth-child(6n+4)]:pt-0 md:[&:nth-child(6n+6)]:pt-0 md:[&:nth-child(6n+5)]:pt-20">
      <div className="flex">
        <Image
          src={image}
          alt={name}
          className="md:w-[238px]"
          width={476}
          height={682}
        />
        <div
          className={`${pt_serif.className} origin-top-left translate-x-5 rotate-90 whitespace-nowrap text-xs`}
        >
          {title}
        </div>
      </div>
      <div className={`${poppins.className} pt-2 text-sm font-semibold`}>
        {name}
      </div>
    </div>
  );
}

export default function TeamPageChallenge() {
  return (
    <div className="mx-3 mt-[71px] flex flex-col gap-10 md:mt-[110px] md:ml-[243px] md:mr-[240px] md:gap-20">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between">
        <div
          className={`${pt_serif.className} text-4xl font-bold md:whitespace-nowrap`}
        >
          The creative crew
        </div>
        <div className="grid gap-2.5">
          <div className={`${poppins.className} text-lg font-semibold`}>
            WHO WE ARE
          </div>
          <div className={`${poppins.className} text-sm md:w-[440px]`}>
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        <Crew
          image={"/team-page-challenge/photo1.png"}
          title={"PRODUCT OWNER"}
          name={"Bill Mahoney"}
        />
        <Crew
          image={"/team-page-challenge/photo2.png"}
          title={"ART DIRECTOR"}
          name={"Saba Cabrera"}
        />
        <Crew
          image={"/team-page-challenge/photo3.png"}
          title={"TECH LEAD"}
          name={"Shae Le"}
        />
        <Crew
          image={"/team-page-challenge/photo4.png"}
          title={"UX DESIGNER"}
          name={"Skylah Lu"}
        />
        <Crew
          image={"/team-page-challenge/photo5.png"}
          title={"DEVELOPER"}
          name={"Griff Richards"}
        />
        <Crew
          image={"/team-page-challenge/photo6.png"}
          title={"DEVELOPER"}
          name={"Stan John"}
        />
      </div>
      <Footer />
    </div>
  );
}
