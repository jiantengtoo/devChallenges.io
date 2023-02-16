import {
  Inconsolata,
  Space_Mono,
  Montserrat,
  Crimson_Pro,
  Lora,
  Playfair_Display,
  PT_Serif,
  Poppins,
} from "@next/font/google";

export const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const inconsolata = Inconsolata({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const space_mono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const crimson_pro = Crimson_Pro({ weight: ["200"], subsets: ["latin"] });

export const lora = Lora({ weight: ["500", "700"], subsets: ["latin"] });

export const playfair_display = Playfair_Display({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const pt_serif = PT_Serif({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
});
