import { motion } from "framer-motion";
import { FaFeatherAlt } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


export default function Hero() {
    const { t } = useTranslation();

  return (
    <motion.section
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-br from-purple-900 via-black to-gray-900"
    >
      <motion.div
        className="bg-gradient-to-br from-purple-700 via-purple-500 to-pink-500 rounded-3xl p-6 sm:p-10 max-w-3xl w-full text-white shadow-2xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)",
        }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center mb-4">
          <FaFeatherAlt className="text-white text-5xl animate-bounce" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Feelio</h1>
        <p className="text-base sm:text-lg text-gray-100 mb-6">
          O diário inteligente que entende seus sentimentos com IA.
        </p>
        <a
          href="#start"
          className="inline-block mt-6 bg-white text-purple-700 font-semibold hover:bg-purple-100 px-6 py-3 rounded-full transition"
        >
            {t('start_now')}
        </a>
      </motion.div>
    </motion.section>
  );
}
