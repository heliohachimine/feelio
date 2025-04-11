import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user } = useAuth();

  return (
    <motion.header
      className="w-full px-6 py-4 flex items-center justify-between bg-white dark:bg-gray-900 shadow-md fixed top-0 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo à esquerda */}
      <Link to={user ? "/home" : "/"}>
        <h1 className="text-2xl font-bold text-purple-600">Feelio</h1>
      </Link>

      {/* Botões à direita */}
      <div className="flex items-center gap-4">
        {!user && (
          <Link to="/login">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              Login
            </button>
          </Link>
        )}

        {/* Select de idioma */}
        <select className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-2 rounded-lg focus:outline-none">
          <option value="pt">PT</option>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    </motion.header>
  );
}
