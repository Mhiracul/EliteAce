"use client";

import AboutUs from "./component/AboutUs";
import CardSlider from "./component/CardSlider";
import Contact from "./component/Contact";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Properties from "./component/Properties";
import Rent from "./component/Rent";
import Sell from "./component/Sell";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <AboutUs />
      <Sell />
      <Properties />
      <Contact />
      <CardSlider />
      <ContactUs />
      <Footer />
    </main>
  );
}
