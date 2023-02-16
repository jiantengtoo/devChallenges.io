import Image from "next/image";

import Footer from "src/components/devchallenges.io/footer";
import { inconsolata, space_mono } from "src/shared/fonts";

export default function NotFoundChallenge() {
  return (
    <div className="flex h-screen flex-col justify-between px-6 md:px-20">
      <div className={`${inconsolata.className} mt-5 text-2xl md:mt-10`}>
        404 NOT FOUND
      </div>
      <div className="flex grow flex-col pt-6 md:grow-0 md:flex-row md:gap-[120px] md:pt-0">
        <Image
          src={"/404-not-found-challenge/Scarecrow.png"}
          alt={"scarecrow 404 not found"}
          className={"mx-auto h-auto w-[286px] md:w-[540px]"}
          width={"1079"}
          height={"895"}
        />
        <div className="flex grow flex-col justify-evenly md:grow-0 md:justify-between">
          <div
            className={`${space_mono.className} text-5xl font-bold md:text-[64px]`}
          >
            I have bad news for you
          </div>
          <div className={`${space_mono.className} text-[18px]`}>
            The page you are looking for might be removed or is temporarily
            unavailable
          </div>
          <button
            className={`${space_mono.className} w-52 bg-[#333] px-8 py-6 text-sm text-white`}
          >
            BACK TO HOMEPAGE
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
