import { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: `translateY(${offsetY * 0.5}px)`, // parallax effect
      }}
    >
      <div className="text-center z-10 bg-black/40 p-6 rounded-xl backdrop-blur-sm">
        <h1 className="text-5xl font-bold mb-2">
          Welcome to feel.io <HeartIcon />
        </h1>
        <p className="text-lg text-gray-200">
          Feel. Record. Discover. Each emotion is part of your journey
        </p>
      </div>

      {/* Optional overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0" />
    </header>
  );
}
