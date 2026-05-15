import React from "react";
import { Header } from "./components/Header.jsx";
import { MobileStickyCTA } from "./components/MobileStickyCTA.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { TrustBadges } from "./components/TrustBadges.jsx";
import { WhoWeHelp } from "./components/WhoWeHelp.jsx";
import { ServicesGrid } from "./components/ServicesGrid.jsx";
import { MedicaidSupport } from "./components/MedicaidSupport.jsx";
import { HowItWorks } from "./components/HowItWorks.jsx";
import { WhyChooseCareBridge } from "./components/WhyChooseCareBridge.jsx";
import { HealthPlanStatus } from "./components/HealthPlanStatus.jsx";
import { ReferralSection } from "./components/ReferralSection.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
import { ContactForm } from "./components/ContactForm.jsx";
import { FAQSection } from "./components/FAQSection.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrustBadges />
        <WhoWeHelp />
        <ServicesGrid />
        <MedicaidSupport />
        <HowItWorks />
        <WhyChooseCareBridge />
        <HealthPlanStatus />
        <ReferralSection />
        <AboutSection />
        <ContactForm />
        <FAQSection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
