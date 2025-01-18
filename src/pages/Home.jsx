import PricingPlans from "../components/PricingPlans";
import { ServicesSection } from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import HeroSection from "@/components/HeroSection";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      <PricingPlans />
      <Testimonials />
      <CallToAction />
    </div>
  );
}

export default Home;
