import { FooterSection } from "./Footer/FooterSection";
import { FormSection } from "./FormSection/FormSection";
import { Hero } from "./HeroSection/Hero";
import { Navbar } from "./HeroSection/Navbar/Navbar";
import { Featured } from "./HowSection/Featured/Featured";
import { HowSection } from "./HowSection/HowSection";
import { MealsSection } from "./MealsSection/MealsSection";
import { PricingSection } from "./PricingSection/PricingSection";
import { TestimonialsSection } from "./TestimonialsSection/TestimonialsSection";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <HowSection />
      <MealsSection />
      <TestimonialsSection />
      <PricingSection />
      <FormSection />
      <hr style={{ border: "1px solid rgba(1,1,1,0.1)" }} />
      <FooterSection />
    </>
  );
};
