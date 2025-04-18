import { useState, useEffect } from "react";
import TypingText from "../components/TypingText";

export default function LandBot({ onResponse, currentSection, responseType="default" }) {
  const [showButtons, setShowButtons] = useState(false);
  const [typingFinished, setTypingFinished] = useState(false);


  useEffect(() => {
    setTypingFinished(false);
    setShowButtons(false);
  }, [currentSection]);



  const sectionMessages = {
    hero: {
      default: "Olá, como foi seu dia? Consigo te ajudar em algo?",
    },
    features: {
      positive: "Que ótimo saber disso! Vamos explorar recursos que podem elevar ainda mais seu bem-estar.",
      negative: "Sinto muito por isso. Talvez esses recursos possam te ajudar a melhorar seu dia.",
      default: "Esses são os recursos que podem te ajudar no dia a dia.",
    },
    benefits: {
      default: "Olha só quantos benefícios você pode aproveitar!",
    },
  };
  const getMessageForSection = (section, response) => {
    const sectionData = sectionMessages[section];
    if (!sectionData) return sectionMessages.hero.default;

    return sectionData[response] || sectionData.default;
  };


  const initialMessage = getMessageForSection(currentSection, responseType);
  return (
    <div className="min-h-screen flex flex-col pt-24 pl-8">
      <div className="flex justify-start">
        <div className="flex items-start gap-3">
        <div className="w-10 md:w-12 aspect-square bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
  IA
</div>
          <div className="bg-white text-gray-900 rounded-2xl px-5 py-3 max-w-xs shadow-md">
            {!typingFinished && (
              <TypingText
                text={initialMessage}
                onComplete={() => {
                  setTypingFinished(true);
                  setShowButtons(true);
                }}
              />
            )}
            {typingFinished && <span>{initialMessage}</span>}
          </div>
        </div>
      </div>

      {showButtons && currentSection =="hero" &&(
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => onResponse("positive")}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            <span className="block md:hidden text-xl">😊</span>
            <span className="hidden md:block">Tive um dia bom</span>
          </button>
          <button
            onClick={() => onResponse("negative")}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            Meu dia não foi legal 😞
          </button>
        </div>
      )}
    </div>
  );
}
