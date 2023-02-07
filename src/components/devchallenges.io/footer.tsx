import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Footer() {
  return (
    <div
      className={`${montserrat.className} pb-6 text-center text-sm font-medium text-[#BDBDBD]`}
    >
      created by <span className="font-bold underline">jiantengtoo</span> -
      devChallenges.io
    </div>
  );
}
