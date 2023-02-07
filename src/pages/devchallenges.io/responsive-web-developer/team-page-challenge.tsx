import Image, { type StaticImageData } from "next/image";
import Photo1 from "public/team-page-challenge/photo1.png";
import Photo2 from "public/team-page-challenge/photo2.png";
import Photo3 from "public/team-page-challenge/photo3.png";
import Photo4 from "public/team-page-challenge/photo4.png";
import Photo5 from "public/team-page-challenge/photo5.png";
import Photo6 from "public/team-page-challenge/photo6.png";

import { PT_Serif, Poppins } from "@next/font/google";
import Footer from "src/components/devchallenges.io/footer";

const pt_serif = PT_Serif({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
});

function Crew({
  image,
  title,
  name,
}: {
  image: StaticImageData;
  title: string;
  name: string;
}) {
  return (
    <div className="pb-2 pl-2 pr-6 even:pt-20 md:[&:nth-child(6n+4)]:pt-0 md:[&:nth-child(6n+6)]:pt-0 md:[&:nth-child(6n+5)]:pt-20">
      <div className="flex">
        <Image src={image} alt={name} className="md:w-[238px]" />
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
        <Crew image={Photo1} title={"PRODUCT OWNER"} name={"Bill Mahoney"} />
        <Crew image={Photo2} title={"ART DIRECTOR"} name={"Saba Cabrera"} />
        <Crew image={Photo3} title={"TECH LEAD"} name={"Shae Le"} />
        <Crew image={Photo4} title={"UX DESIGNER"} name={"Skylah Lu"} />
        <Crew image={Photo5} title={"DEVELOPER"} name={"Griff Richards"} />
        <Crew image={Photo6} title={"DEVELOPER"} name={"Stan John"} />
      </div>
      <Footer />
    </div>
  );
}
