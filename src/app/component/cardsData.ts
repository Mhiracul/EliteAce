// path-to-your-assets/cardsData.ts
import { AiFillStar } from "react-icons/ai";
import Cards from "../../../public/LOGO.svg";
import Paul from "../../../public/LOGO.svg";
import Samwize from "../../../public/LOGO.svg";

const cardsData = [
  {
    id: 1,
    name: "Paul Okeke",
    title: "Residential appraiser",
    image: Paul,
    testimonial:
      "“I highly recommend Andora agent to anyone looking to buy or sell a home. They are professional, reliable, and truly care about their clients' needs. They are professional, reliable, and truly care about their clients' needs.”",
    backgroundColor: "bg-[#052087]",
  },
  {
    id: 2,
    name: "Emmanuel Okereafor",
    title: "Commercial Property Manager",
    image: Cards,
    testimonial:
      "“I highly recommend Andora agent to anyone looking to buy or sell a home. They are professional, reliable, and truly care about their clients' needs. They are professional, reliable, and truly care about their clients' needs.”",

    backgroundColor: "bg-[#868686]",
  },
  {
    id: 3,
    name: "Samuel",
    title: "Project Developer",
    image: Samwize,
    testimonial:
      "“I highly recommend Andora agent to anyone looking to buy or sell a home. They are professional, reliable, and truly care about their clients' needs. They are professional, reliable, and truly care about their clients' needs.”",

    backgroundColor: "bg-[#052087]",
  },
  // Add more objects for additional clients
];

export default cardsData;
