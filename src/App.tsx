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
      <main>
        <Hero />
        <Featured />
        <HowSection />
        <MealsSection />
        {/* <TestimonialsSection /> */}
        {/* <PricingSection /> */}
        {/* <FormSection /> */}
      </main>
      {/* <FooterSection /> */}
    </>
  );
};
