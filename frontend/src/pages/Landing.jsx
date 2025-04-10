import Hero from ".././components/Hero";
import CarouselSection from ".././components/CarouselSection";
import BenefitsSection from "../components/BenefitsSection";
import FaqSection from "../components/FaqSection";
import Header from "../components/Header";
import FeatureCards from "../components/FeatureCards";

export default function Landing() {
  return (
    <div className="text-white min-h-screen">
      <Header />
      <Hero />
      <FeatureCards />
      <CarouselSection />
      <BenefitsSection />
      <FaqSection />
      {/* Adicione aqui outras seções, ex: features, footer, etc */}
    </div>
  );
}
