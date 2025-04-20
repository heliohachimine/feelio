import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

export default function OptionMenu({ user }) {
  return (
    <div className="flex items-center gap-4 sm:gap-6">
      {!user && (
        <Link to="/login">
          <button className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition">
            Login
          </button>
        </Link>
      )}

      <LanguageSelector />
    </div>
  );
}
