import React from "react";
import HeroSection from "../Components/LandingPageComponents/HeroSection";
import DentalServices from "../Components/LandingPageComponents/DentalServices";
import InfiniteMarquee from "../Components/LandingPageComponents/InfiniteMarquee";
import WhoWeAre from "../Components/LandingPageComponents/WhoWeAre";
import DentalCards from "../Components/LandingPageComponents/DentalCards";
import DentalAppointment from "../Components/LandingPageComponents/DentalAppointment";
import Footer from "../Components/Footer";
import FamilyHealthHero from "../Components/LandingPageComponents/FamilyHeathHero";
import Certificate from "../Components/LandingPageComponents/Certificate";

const LandingPage = () => {
  return (
    <div className="h-[200vh] bg-lime-50">
      <HeroSection />
      {/* <FamilyHealthHero /> */}
      <DentalServices />
      <InfiniteMarquee />
      <WhoWeAre />
      {/* <Certificate /> */}
      <DentalCards />
      <DentalAppointment />
      <InfiniteMarquee />
      <Footer />
    </div>
  );
};

export default LandingPage;
