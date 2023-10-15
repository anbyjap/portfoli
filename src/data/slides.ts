import about1 from "../images/about/about1.jpg";
import about2 from "../images/about/about2.jpg";
import about3 from "../images/about/about3.jpg";
import about4 from "../images/about/about4.jpg";
import about5 from "../images/about/about5.jpg";
import about6 from "../images/about/about6.jpg";
import about7 from "../images/about/about7.jpg";
import about8 from "../images/about/about8.jpg";
import about9 from "../images/about/about9.jpg";
import about10 from "../images/about/about10.jpg";
import about11 from "../images/about/about11.jpg";
import about12 from "../images/about/about12.jpg";
import thumbnail1 from "../images/about/thumbnail1.png";

import aboutVideo1 from "../images/about/eating_scopion.mp4";

const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

console.log(thumbnail1);

const photos = [
  {
    src: about1,
    width: 4,
    height: 3,
  },
  {
    src: about2,
    width: 4,
    height: 3,
  },
  {
    src: about3,
    width: 4,
    height: 3,
  },
  {
    src: about4,
    width: 4,
    height: 3,
  },
  {
    src: about5,
    width: 554,
    height: 739,
  },
  {
    src: about6,
    width: 6,
    height: 13,
  },
  {
    src: about7,
    width: 554,
    height: 739,
  },
  {
    src: about8,
    width: 1,
    height: 1,
  },
  {
    src: about9,
    width: 1080,
    height: 809,
  },
  {
    src: about10,
    width: 739,
    height: 554,
  },
  {
    src: about11,
    width: 554,
    height: 739,
  },
  {
    src: about12,
    width: 739,
    height: 554,
  },
  {
    src: thumbnail1,
    width: 1199,
    height: 709,
  },
];

export const slides = photos.map((photo) => {
  const width = breakpoints[0];
  const height = (photo.height / photo.width) * width;

  return {
    src: photo.src,
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: photo.src,
        width: breakpoint,
        height,
      };
    }),
  };
});

export const advancedSlides = [
  {
    ...slides[0],
    title: "RSM Rajadamnern Singha Muay Thai Academy",
    description:
      "Bangkok, Thailand\n\nThe was wonderful time to experience the real muay thai in Thailand.\n\nThe man next me is the teacher of muay thai.",
  },
  {
    ...slides[1],
    title: "Baan Tong Luang - Long Neck Karen",
    description:
      "Chiang Mai 50180, Thailand\n\nIn the village of Long Neck Karen, I could learn about their culture.",
  },
  {
    ...slides[2],
    title: "Wat Saket (The Golden Mount)",
    description:
      "Bangkok, Thailand\n\nWat Saket in Bangkok Old Town is an Ayutthaya-era shrine with a gleaming gold chedi in Bangkok. Also called the Golden Mount, it occupies an 80-metre-tall manmade hill that was built during the reign of King Rama III.",
  },
  {
    ...slides[3],
    title: "CHATUCHAK WEEKEND MARKET",
    description:
      "Bangkok, Thailand\n\nThe biggest market in Bangkok, I felt the local atmosphere there.",
  },
  {
    ...slides[4],
    title: "Rissyakuji Temple (Yamadera)",
    description: "Yamagata, Japan\n\nTraditional Temple in Japan.",
  },
  {
    ...slides[5],
    title: "Thanon Khao San",
    description:
      "Bangkok, Thailand\n\nMe eating a scorpion surrounded by lots of tourists.",
  },
  {
    ...slides[6],
    title: "Aquamarine Fukushima",
    description: "Fukushima, Japan\n\nwalking around the aquarium",
  },
  {
    ...slides[7],
    title: "Aquamarine Fukushimae",
    description: "Fukushima, Japan\n\nVisited an exhibition",
  },
  {
    ...slides[8],
    title: "Higashiyama",
    description: "Ishikawa, Japan\n\nPhoto on famous street",
  },
  {
    ...slides[9],
    title: "Chirihama Beach Driveway",
    description: "Ishikawa, Japan\n\nDrived trough the beach",
  },
  {
    ...slides[10],
    title: "Higashiyama",
    description: "Ishikawa, Japan\n\nPhoto on famous street",
  },
  {
    ...slides[11],
    title: "Cat Cafe",
    description: "Fukushima, Japan\n\nI love cats",
  },
  {
    type: "video" as const,
    title: "Eating scorpion",
    description: "Bangkok, Thailand\n\nIt was delicious",
    width: 1280,
    height: 720,
    poster: thumbnail1,
    sources: [
      {
        src: aboutVideo1,
        type: "video/mp4",
      },
    ],
  },
];

// export default slides;
// export default advancedSlides;
