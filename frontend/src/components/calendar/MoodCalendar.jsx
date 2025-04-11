import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // estilo padrão
import "./calendar-custom.css"; // você pode customizar depois
import { useAuth } from "../../context/AuthContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MoodCalendar() {
  const [moods, setMoods] = useState([]);
  const [hoveredDate, setHoveredDate] = useState(null);
  const { accessToken } = useAuth(); // pega o token do contexto

  const getWeeklyData = () => {
    const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay()); // domingo

    const weekData = Array(7)
      .fill(null)
      .map((_, i) => {
        const date = new Date(weekStart);
        date.setDate(date.getDate() + i);
        const dateStr = date.toISOString().split("T")[0];
        const mood = moodMap[dateStr];

        return {
          day: weekdays[i],
          value: mood ? mood.level : 0, // ou qualquer campo numérico do humor (ex: mood.score, mood.level)
        };
      });

    return weekData;
  };

  useEffect(() => {
    if (!accessToken) return;
    fetch("http://127.0.0.1:5000/daily", {
      headers: {
        Authorization: `Bearer ${accessToken}`, // aqui vai o token
      },
    })
      .then((res) => res.json())
      .then((data) => setMoods(data))
      .catch((err) => console.error("Erro ao buscar dados:", err));
  }, []);

  // Cria um mapa rápido para buscar sentimentos por data
  const moodMap = moods.reduce((map, item) => {
    map[item.date] = item.feeling;
    console.log(item);
    return map;
  }, {});

  const descriptionMap = moods.reduce((map, item) => {
    map[item.date] = item.description;
    console.log(item);
    return map;
  }, {});

  const handleMouseOver = (date) => {
    const dateStr = date.toISOString().split("T")[0];
    setHoveredDate(dateStr);
  };

  const handleMouseLeave = () => {
    setHoveredDate(null);
  };

  const tileClassName = ({ date }) => {
    const dateStr = date.toISOString().split("T")[0];
    const mood = moodMap[dateStr];
    return mood;
  };

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-8">
      <div className="w-full lg:w-1/2 flex justify-center">
        <Calendar
          tileClassName={tileClassName}
          tileContent={({ date }) => {
            const dateStr = date.toISOString().split("T")[0];
            const isHovered = hoveredDate === dateStr;
            const mood = moodMap[dateStr];
            const description = descriptionMap[dateStr];

            return (
              <div
                onMouseEnter={() => handleMouseOver(date)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <p>{description}</p>
                {isHovered && mood && (
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 bg-white dark:bg-gray-800 text-sm text-black dark:text-white p-2 rounded shadow-md w-40 text-center">
                    {mood.description}
                  </div>
                )}
              </div>
            );
          }}
        />
      </div>
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <h2 className="text-lg font-semibold mb-2 text-center">
          Humor da semana
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={getWeeklyData()}>
            <XAxis dataKey="day" />
            <YAxis domain={[1, 5]} tickCount={5} />
            <Tooltip />
            <Bar dataKey="value" fill="#8B5CF6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
