import HomeSectionOne from "@/components/HomeSections/HomeSectionOne";
import HomeSectionTwo from "@/components/HomeSections/HomeSectionTwo";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Route Investimentos",
  description: "Os melhores assessores cuidando dos seus investimentos.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Features /> */}
      {/* <Video /> */}
      <HomeSectionTwo />
      {/* <Brands /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Services />
      <HomeSectionOne />
      {/* <Contact /> */}
    </>
  );
}
