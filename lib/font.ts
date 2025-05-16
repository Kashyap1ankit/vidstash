import { Instrument_Sans, Mona_Sans, Sora } from "next/font/google";

//fonts for headers and main subject
export const mona = Mona_Sans({
  weight: "600",
  subsets: ["latin"],
});

export const sora = Sora({
  weight: ["600", "300"],
  subsets: ["latin"],
});

// fonts for innear text
export const instrument = Instrument_Sans({
  weight: "600",
  subsets: ["latin-ext"],
});
