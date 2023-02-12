import Image from "next/image";

import { Crimson_Pro, Montserrat, Lora } from "@next/font/google";
import Footer from "src/components/devchallenges.io/footer";

const crimson_pro = Crimson_Pro({ weight: ["200"], subsets: ["latin"] });
const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const lora = Lora({ weight: ["500", "700"], subsets: ["latin"] });

export default function InteriorConsultant() {
  return (
    <div className=" flex min-h-screen flex-col justify-between bg-neutral-900 px-3 pt-5 text-white md:px-20 md:pt-12">
      {/* TOP BAR */}
      <div className="flex justify-between">
        <div
          className={`${crimson_pro.className} border border-white p-2 text-sm`}
        >
          THIS INTERIOR
        </div>
        <div className="self-center md:hidden">
          <input
            type="checkbox"
            className="peer absolute z-30 h-[20px] w-[28.5px] opacity-0"
          />
          <span className="relative z-20 mb-[5px] block h-[3px] w-[28.5px] bg-white transition-all peer-checked:translate-y-2 peer-checked:rotate-45" />
          <span className="relative z-20 mb-[5px] block h-[3px] w-[28.5px] bg-white transition-all peer-checked:opacity-0 " />
          <span className="relative z-20 block h-[3px] w-[28.5px] bg-white transition-all peer-checked:-translate-y-2 peer-checked:-rotate-45 " />
          <div className="fixed top-0 left-0 z-10 hidden h-full w-full items-center justify-center bg-neutral-900 peer-checked:grid">
            <ul className={`${montserrat.className} text-center font-medium`}>
              <li className="py-4 font-bold underline decoration-2 underline-offset-8">
                Home
              </li>
              <li className="py-4">Collection</li>
              <li className="py-4">About</li>
              <li className="py-4">Contact</li>
            </ul>
          </div>
        </div>
        <ul
          className={`${montserrat.className} hidden gap-12 text-center font-medium md:flex`}
        >
          <li className="font-bold underline decoration-2 underline-offset-8">
            Home
          </li>
          <li>Collection</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* CONTENT */}
      <div className="flex grow flex-col gap-6 md:grow-0 md:flex-row md:justify-between">
        <div className="mt-9 grid gap-6 self-center md:mt-0 md:flex md:max-w-3xl md:flex-col md:gap-8">
          <div className={`${lora.className} text-4xl`}>Modern interior</div>
          <div className={`${montserrat.className} text-sm font-normal`}>
            A full-Service residential & commercial interior design and staging
            company offering professional organizing & eco-services.
          </div>
          <div className={`${montserrat.className} text-sm font-bold`}>
            Read more <span className="ml-4">→</span>
          </div>
        </div>
        <div>
          <Image
            src={"/interior-consultant/photo1.png"}
            alt="interior"
            className="max-h-[586px] w-auto"
            width={1474}
            height={1110}
          />
          <div className="relative -top-14 left-12 mr-16 bg-neutral-900 px-5 pt-4 pb-6 shadow-md shadow-[rgb(0,0,0,0.25)] md:left-52 md:mr-64 ">
            <div className="flex items-center gap-4">
              <Image
                src={"/interior-consultant/photo2.png"}
                alt="profile pic"
                className="h-10 w-10 rounded-full"
                width={200}
                height={200}
              />
              <div className={`${montserrat.className}`}>
                <div className="text-xs font-medium">Aliza Webber</div>
                <div className="text-[10px] font-medium text-neutral-400">
                  Interior Designer
                </div>
              </div>
            </div>
            <div className={`${lora.className} pt-4 text-lg font-bold`}>
              Design in 2020 by Aliza Webber
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
