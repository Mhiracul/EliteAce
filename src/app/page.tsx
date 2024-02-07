"use client";
import Head from "next/head";

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
    <main className="font-urbanist">
      <Head>
        <title>EliteAndAce Properties</title>
        <meta
          name="description"
          content="Leading Real Estate Developers in Sub Saharan Africa"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
