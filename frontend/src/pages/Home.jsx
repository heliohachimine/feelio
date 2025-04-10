import MoodCalendar from "../components/calendar/MoodCalendar";

export default function Home() {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-800 via-purple-900 to-black p-4">
        <MoodCalendar />
      </div>
    );
  }
