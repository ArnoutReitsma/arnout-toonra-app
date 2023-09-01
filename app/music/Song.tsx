export interface Song {
  title: string;
  url: string;
  album?: string;
  genre?: string;
  progress?: number;
  length?: number;
}

export const songData2: Song[] = [
  {
    title: "Spongebob - Fun (TOONRA Remix)",
    url: "https://firebasestorage.googleapis.com/v0/b/arnout-toonra.appspot.com/o/toonra-music%2FFUN2.mp3?alt=media&token=69b583f1-c6d2-4037-97b8-35ee8a335583",
  },
  {
    title: "Kompany - Feel It All (TOONRA Remix)",
    url: "https://firebasestorage.googleapis.com/v0/b/arnout-toonra.appspot.com/o/toonra-music%2FFeelItAllDNB_V6_FINAL.mp3?alt=media&token=263fef95-8ca9-4650-9ab1-bd779e5aec13",
  },
  {
    title: "The Chainsmokers, ILLENIUM & Carlie Hanson - See You Again (TOONRA Remix)",
    url: "https://firebasestorage.googleapis.com/v0/b/arnout-toonra.appspot.com/o/toonra-music%2FSeeYouAgainILLICHAINY.mp3?alt=media&token=acfc5b61-336a-4ff8-8a53-8435a65e7f2e",
  },
  {
    title: "TOONRA - Progress",
    url: "https://firebasestorage.googleapis.com/v0/b/arnout-toonra.appspot.com/o/toonra-music%2FPrograssiveSomething.mp3?alt=media&token=f4204ac0-5880-4f83-8b6c-b37211e10800",
  },
];