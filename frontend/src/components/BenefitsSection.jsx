import { motion } from "framer-motion";
import { FaBrain, FaCalendarAlt, FaSmileBeam } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

const benefits = [
  {
    icon: <FaBrain className="text-4xl text-purple-500 mb-4" />,
    title: "Autoconhecimento com IA",
    description:
      "Acompanhe seus sentimentos e entenda padrões emocionais com tecnologia inteligente.",
  },
  {
    icon: <FaCalendarAlt className="text-4xl text-purple-500 mb-4" />,
    title: "Rotina Organizada",
    description:
      "Receba sugestões personalizadas para melhorar seu dia com base no seu humor.",
  },
  {
    icon: <FaSmileBeam className="text-4xl text-purple-500 mb-4" />,
    title: "Bem-estar em primeiro lugar",
    description:
      "Cuide da sua saúde mental de forma leve e bonita com visual minimalista.",
  },
];

export default function BenefitsSection() {
  return (
    <SectionWrapper>
      <section className="bg-black py-16 px-6">
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Por que usar o Feelio?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center text-center">
                {benefit.icon}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
