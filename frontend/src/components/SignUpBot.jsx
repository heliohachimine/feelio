import { useState } from "react";
import TypingText from "./TypingText";

export default function RegisterChat() {
  const steps = [
    { key: "name", question: "Qual é o seu nome?" },
    { key: "email", question: "Qual é o seu e-mail?" },
    { key: "password", question: "Escolha uma senha segura:" },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [lastUserMessage, setLastUserMessage] = useState("");
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    const key = steps[currentStep].key;

    setFormData((prev) => ({ ...prev, [key]: input }));
    setLastUserMessage(input);

    const nextStep = currentStep + 1;
    if (nextStep < steps.length) {
      setTimeout(() => {
        setCurrentStep(nextStep);
        setLastUserMessage("");
      }, 600); // tempo pra mostrar a resposta antes de trocar a pergunta
    } else {
      // aqui você pode enviar os dados pro backend
      console.log("Formulário completo:", formData);
      setLastUserMessage("");
      setCurrentStep(nextStep);
    }

    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-transparent flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md flex flex-col gap-4">
        <div className="flex flex-col gap-2 min-h-[100px]">
          {currentStep < steps.length ? (
            <>
              <div className="self-start bg-purple-100 text-gray-800 px-4 py-2 rounded-lg shadow">
              <TypingText />
                {steps[currentStep].question}
              </div>
              {lastUserMessage && (
                <div className="self-end bg-purple-600 text-white px-4 py-2 rounded-lg shadow">

                  {lastUserMessage}
                </div>
              )}
            </>
          ) : (
            <div className="text-center text-purple-600 font-semibold">
              Cadastro completo! 🎉
            </div>
          )}
        </div>
        {currentStep < steps.length && (
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type={steps[currentStep].key === "password" ? "password" : "text"}
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-purple-500"
              required
              autoFocus
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg"
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
