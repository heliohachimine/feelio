import "react-calendar/dist/Calendar.css";
import './index.css'
import Landing from "./pages/Landing";

export default function App() {
  return (
    <div>
      <Landing/>
      {/* <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition duration-500">
        <header className="flex justify-between items-center p-6">
          <button
            className="border px-4 py-1 rounded text-sm"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </header>

        <motion.main
          className="flex flex-col items-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold mb-4 text-center">
            Understand your emotions, daily.
          </h2>
          <p className="text-center max-w-md text-gray-400 dark:text-gray-300">
            Moona helps you track your mood and build emotional self-awareness through simple daily check-ins.
          </p>

          <div className="mt-10">
            <MoodCalendar/>
          </div>
        </motion.main>
      </div> */}
    </div>
  );
}
