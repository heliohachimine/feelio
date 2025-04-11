import MoodCalendar from "../components/calendar/MoodCalendar";
import LandBot from "../components/LandBot";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white flex p-6 pt-20">
      {/* Coluna da esquerda */}
      <div className="w-2/3 relative flex justify-center items-start">
        <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent z-40 pointer-events-none" />

        {/* Calendário */}
        <MoodCalendar />
      </div>

      {/* Coluna da direita */}
      <div className="w-1/3 pl-8 pr-4">
      <LandBot />
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Escreva sobre seu dia</h2>
        <textarea
          placeholder="Hoje me senti..."
          className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </div>
  );
}
