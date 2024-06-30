import { useNavigate } from "react-router-dom";

import { PAGES_PATH } from "src/router";

const SettingsLanguage = () => {
  const navigate = useNavigate();
  return (
    <div className="border-t border-grey">
      <button
        onClick={() => navigate(PAGES_PATH.settings.full)}
        className="px-6 py-5"
      >
        <img src="/icons/back.svg" alt="back" width={6} height={12} />
      </button>
      <ul className="border-light-grey border-t">
        <li className="border-light-grey border-b px-6 py-4 font-medium">
          ENG
        </li>
        <li className="border-light-grey border-b px-6 py-4 font-medium">
          ENG
        </li>
        <li className="border-light-grey border-b px-6 py-4 font-medium">
          ENG
        </li>
        <li className="border-light-grey border-b px-6 py-4 font-medium">
          ENG
        </li>
      </ul>
    </div>
  );
};

export default SettingsLanguage;
