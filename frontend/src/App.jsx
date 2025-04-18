import { useState } from "react";
import { motion } from "framer-motion";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

import "react-calendar/dist/Calendar.css";
import MoodCalendar from "./components/calendar/MoodCalendar";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition duration-500">
        <header className="flex justify-between items-center p-6">
          <button
            className="border px-4 py-1 rounded text-sm"
            onClick={() => setDarkMode(!darkMode)}
          >
            <p>
              {darkMode ? (
                <SunIcon className="h-6 w-6 stroke-main-purple_500"/>
              ) : (
                <MoonIcon className="h-6 w-6 stroke-main-purple_500"/>
              )}
            </p>
          </button>
        </header>

        <motion.main
          className="flex flex-col items-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-main-purple_200">
            <h2 className="text-4xl  font-semibold mb-4 text-center">
              Understand your emotions, whenever and wherever you are. Register
              your mood daily and recieve personalized insights - let's do it
              better together.
            </h2>
            <p className="text-center max-w-md text-gray-400 dark:text-gray-300">
              Feel.io helps you track your mood and build emotional
              self-awareness through simple check-ins. Feel free to share your
              thoughts - this is your safe space.
            </p>
          </div>
          <div className="max-w-sm">
            <MoodCalendar />
          </div>
        </motion.main>
      </div>
    </div>
  );
}
