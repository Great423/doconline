import PricingPlans from "../components/PricingPlans";
import { ServicesSection } from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import HeroSection from "@/components/HeroSection";
import CallToAction from "@/components/CallToAction";

function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      <PricingPlans />
      <CallToAction />
    </div>
  );
}

export default Home;
