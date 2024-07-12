import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { PAGES_PATH } from "src/router";

import { setLocalStorageLanguage } from "src/config/i18next";

const SettingsLanguage = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
    setLocalStorageLanguage(lang);
    navigate(PAGES_PATH.settings.full);
  };

  return (
    <div className="border-t border-grey">
      <button
        onClick={() => navigate(PAGES_PATH.settings.full)}
        className="px-6 py-5"
      >
        <img src="/icons/back.svg" alt="back" width={6} height={12} />
      </button>
      <ul className="border-t border-light-grey">
        {i18n.languages.map((lang) => (
          <li
            key={lang}
            className="cursor-pointer border-b border-light-grey px-6 py-4 font-medium uppercase"
            onClick={() => handleClick(lang)}
          >
            {lang}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsLanguage;
