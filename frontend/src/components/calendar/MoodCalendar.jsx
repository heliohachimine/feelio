import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // estilo padrão
import './calendar-custom.css'; // você pode customizar depois

export default function MoodCalendar() {
  const [moods, setMoods] = useState([]);
  const [hoveredDate, setHoveredDate] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/daily")
      .then(res => res.json())
      .then(data => setMoods(data))
      .catch(err => console.error("Erro ao buscar dados:", err));
  }, []);

  // Cria um mapa rápido para buscar sentimentos por data
  const moodMap = moods.reduce((map, item) => {
    map[item.date] = item.feeling;
    console.log(item)
    return map;
  }, {});

  const descriptionMap = moods.reduce((map, item) => {
    map[item.date] = item.description;
    console.log(item)
    return map;
  }, {});

  const handleMouseOver = (date) => {
    const dateStr = date.toISOString().split("T")[0];
    setHoveredDate(dateStr)
  }

  const handleMouseLeave = () => {
    setHoveredDate(null);
  };


  const tileClassName = ({ date }) => {
    const dateStr = date.toISOString().split("T")[0];
    const mood = moodMap[dateStr];
    return mood;
  };

  return (
    <div className="w-full flex justify-center">
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
  );
}
