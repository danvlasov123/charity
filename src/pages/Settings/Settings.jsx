import { Fragment, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useUser } from "src/hooks";

import { PAGES_PATH } from "src/router";

const Settings = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const {
    state: { user },
  } = useUser();

  const info = useMemo(
    () => [
      {
        title: t("Personal info"),
        label: `${user?.firstName || ""} ${user?.lastName || ""}`,
        url: PAGES_PATH.user.full,
      },
      {
        title: t("Language"),
        label: language,
        url: PAGES_PATH.language.full,
      },
      {
        title: t("Security"),
        url: PAGES_PATH.password.full,
      },
    ],
    [user, language],
  );

  const contact = useMemo(
    () => [
      {
        title: "Telegram",
        url: user?.telegram || "/",
      },
      {
        title: "YouTube",
        url: user?.youtube || "/",
      },
      {
        title: "Instagram",
        url: user?.instagram || "/",
      },
      {
        title: "Vk",
        url: user?.vk || "/",
      },
    ],
    [user],
  );

  return (
    <Fragment>
      <div className="border-t border-grey px-6 py-5">
        <div>
          <h2 className="text-xl font-medium leading-6">{t("Account")}</h2>
        </div>
        <div className="flex flex-col gap-6 pt-6">
          {info.map((item, key) => {
            return (
              <Link
                to={item.url}
                key={key}
                className="flex items-center justify-between"
              >
                <div>
                  <p>{item.title}</p>
                </div>
                <div className="flex items-center gap-4">
                  {item.label && (
                    <span className="text-grey">{item.label}</span>
                  )}
                  <button>
                    <img
                      src="icons/right.svg"
                      alt="right"
                      width={6}
                      height={12}
                    />
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="border-y border-grey px-6 py-5">
        <div>
          <h2 className="text-xl font-medium leading-6">{t("Contacts")}</h2>
        </div>
        <div className="flex flex-col gap-6 pt-6">
          {contact.map((item, key) => {
            return (
              <a
                target="_blank"
                href={item.url}
                key={key}
                className="flex items-center justify-between"
              >
                <div>
                  <p>{item.title}</p>
                </div>
                <div className="flex items-center gap-4">
                  <button>
                    <img
                      src="icons/right.svg"
                      alt="right"
                      width={6}
                      height={12}
                    />
                  </button>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Settings;
