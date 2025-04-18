import { motion } from "framer-motion";

export default function SectionWrapper({ children, delay = 0.2 }) {
  return (
    <motion.section
      className="w-full px-6 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
}
