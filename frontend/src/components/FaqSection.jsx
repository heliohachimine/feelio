import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const faqs = [
  {
    question: "O que é o Feelio?",
    answer:
      "Feelio é um diário inteligente que usa IA para entender suas emoções e sugerir melhorias na sua rotina.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Sim! Seus registros são privados e protegidos. A privacidade é uma prioridade para nós.",
  },
  {
    question: "Preciso registrar todos os dias?",
    answer:
      "Não! Você pode registrar quando quiser, mas quanto mais usar, mais precisas ficam as sugestões do Feelio.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper>
      <section className="py-20 px-6 bg-black text-white">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Perguntas Frequentes
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl p-4 cursor-pointer hover:bg-gray-800 transition"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    className="text-gray-400 mt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
