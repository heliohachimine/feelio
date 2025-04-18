import { motion } from "framer-motion";
import { FaCalendarAlt, FaRobot, FaPenFancy, FaSeedling } from "react-icons/fa";

const features = [
  {
    title: "Registre seu dia",
    description: "Escreva o que aconteceu no seu dia para guardar memórias importantes.",
    icon: <FaPenFancy className="text-3xl text-purple-500" />,
  },
  {
    title: "IA como aliada",
    description: "Receba apoio nos dias difíceis e comemore com a IA nos dias felizes.",
    icon: <FaRobot className="text-3xl text-purple-500" />,
  },
  {
    title: "Acompanhe no calendário",
    description: "Visualize seus altos e baixos de forma clara e intuitiva.",
    icon: <FaCalendarAlt className="text-3xl text-purple-500" />,
  },
  {
    title: "Sugestões personalizadas",
    description: "Dicas para melhorar sua rotina emocional com base no seu humor.",
    icon: <FaSeedling className="text-3xl text-purple-500" />,
  },
];

export default function FeatureCards() {
  return (
    <section id="start" className="bg-black text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Funcionalidades do Feelio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/40 transition-all"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
