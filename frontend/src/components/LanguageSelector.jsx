import { useTranslation } from "react-i18next";
import BRIcon from "../assets/icons/brazil.svg?react";
import USIcon from "../assets/icons/united-states.svg?react";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    // <select
    //   onChange={handleChange}
    //   value={i18n.language}
    //   className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-md focus:outline-none focus:ring focus:ring-main-purple_500"
    // >
    //   <option value="pt-BR" className="flex items-center gap-2 bg-waves">
    //     Português
    //   </option>
    //   Select de idioma
    // </select>
    <div className="relative">
      <button
        type="button"
        className="grid w-full cursor-default grid-cols-1 rounded-full bg-white py-2 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
      >
        <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
          <BRIcon className="h-6 w-6"/>
          <span className="hidden sm:block sm:truncate">Português</span>
        </span>
      </button>
    </div>
  );
}
