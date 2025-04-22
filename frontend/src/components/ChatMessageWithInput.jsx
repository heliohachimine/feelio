import { useState, useEffect } from "react";

export default function ChatMessageWithInput({ message, inputType, options = [], onSubmit }) {
  const [typedMessage, setTypedMessage] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [textInput, setTextInput] = useState("");

  // Efeito de digitação letra por letra
  useEffect(() => {
    setTypedMessage("");
    setTypingDone(false);

    const chars = Array.from(message);
    let index = 0;

    const interval = setInterval(() => {
      setTypedMessage((prev) => prev + chars[index]);
      index++;

      if (index === chars.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 30);

    return () => {
      clearInterval(interval); // cancela se a message mudar antes de terminar
    };
  }, [message]);
  const handleTextSubmit = () => {
    if (textInput.trim()) {
      onSubmit(textInput.trim());
      setTextInput("");
    }
  };

  return (
    <div className="w-full flex flex-col items-start space-y-4">
      {/* Mensagem sendo digitada */}
      <div className="bg-white text-gray-900 rounded-2xl px-5 py-3 shadow max-w-lg">
        {typedMessage}
      </div>

      {/* Entradas aparecem depois da digitação */}
      {typingDone && inputType === "buttons" && (
        <div className="flex flex-wrap gap-3">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => onSubmit(opt)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition"
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {typingDone && inputType === "text" && (
        <div className="flex items-center gap-2 w-full max-w-lg">
          <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleTextSubmit()}
            placeholder="Digite sua resposta..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-black"
          />
          <button
            onClick={handleTextSubmit}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
          >
            Enviar
          </button>
        </div>
      )}
    </div>
  );
}
