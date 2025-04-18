import { useRef, useEffect, useState } from "react";
import Hero from ".././components/Hero";
import BenefitsSection from "../components/BenefitsSection";
import FaqSection from "../components/FaqSection";
import FeatureCards from "../components/FeatureCards";
import LandBot from "../components/LandBot";

export default function Landing() {
  const [currentSection, setCurrentSection] = useState("hero");
  const [responseType, setResponseType] = useState(null);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.dataset.section);
        }
      },
      { threshold: 0.5 }
    );

    const sections = [
      heroRef.current,
      featuresRef.current,
      benefitsRef.current,
    ];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleResponse = (type) => {
    setResponseType(type);
    console.log("Resposta do usuário:", type);

    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-white min-h-screen">
      <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-black/90 to-transparent z-40 pointer-events-none" />

      <div className="fixed top-24 w-full flex justify-center z-50 px-4">
        <LandBot
          onResponse={handleResponse}
          currentSection={currentSection}
          responseType={responseType}
        />
      </div>
      <div ref={heroRef} data-section="hero" className="scroll-mt-32 pt-16">
        <Hero />
      </div>
      <div
        ref={featuresRef}
        data-section="features"
        className="scroll-mt-32 pt-16"
      >
        <FeatureCards />
      </div>

      <div
        ref={benefitsRef}
        data-section="benefits"
        className="scroll-mt-32 pt-16"
      >
        <BenefitsSection />
      </div>

      <FaqSection />
      {/* Adicione aqui outras seções, ex: features, footer, etc */}
    </div>
  );
}
