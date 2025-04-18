import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      value={i18n.language}
      className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white px-3 py-1 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
    >
      <option value="pt">🇧🇷 Português</option>
      <option value="en">🇺🇸 English</option>
    </select>
  );
}
