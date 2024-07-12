import { useEffect, useState } from "react";

import { format } from "date-fns";
import cn from "classnames";
import { Button } from "src/components/ui";
import { useNavigate } from "react-router-dom";

import { PAGES_PATH } from "src/router";
import { fetchGetPayments } from "src/api/payments/payments";
import { Loader } from "src/modules/Loader/Loader";
import { useTranslation } from "react-i18next";

const History = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [history, setHistory] = useState(null);

  const [opened, setOpened] = useState(null);

  const handleToggle = (id) => {
    if (opened === id) {
      return setOpened(null);
    }
    setOpened(id);
  };

  const handleRepeat = (id, amount) => {
    navigate(PAGES_PATH.confirm.full(id, amount));
  };

  useEffect(() => {
    const initial = async () => {
      const data = await fetchGetPayments();

      if (data.success) {
        return setHistory(data.result);
      }

      setHistory([]);
    };

    initial();
  }, []);

  if (!history) {
    return <Loader />;
  }

  return (
    <div>
      <div className="pb flex justify-end border-b border-light-grey-2 px-6 py-4">
        <img src="/logo.svg" alt="logo" height={54} />
      </div>
      <div className="px-6 pb-10 pt-5">
        <h1 className="text-xl font-medium leading-6">{t("History")}</h1>
        <div className="flex flex-col gap-4 pt-4">
          {history.map((item) => {
            const isOpened = item.id === opened;
            const className = cn(
              "max-h-[54px] overflow-hidden transition-all duration-500 rounded-md",
              {
                "!max-h-[400px] rounded-none": isOpened,
              },
            );

            return (
              <div
                onClick={() => handleToggle(item.id)}
                key={item.id}
                className={className}
              >
                <div className="rounded-md bg-light-grey-2 p-4">
                  <div className="flex cursor-pointer items-center justify-between">
                    <p>{item.title}</p>
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`transition-opacity ${isOpened ? "opacity-0" : ""}`}
                      >
                        Details
                      </span>
                      <button
                        className={`transition-transform ${isOpened ? "rotate-90" : ""}`}
                      >
                        <img
                          src="/icons/right.svg"
                          alt="right"
                          width={6}
                          height={12}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="pt-4 text-sm leading-4">
                    <p>{item.content}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2.5">
                    <p>Data</p>
                    <span>{format(item.date, "dd.MM.yyyy")}</span>
                  </div>
                  <div
                    className={`flex items-center justify-between pt-2.5 font-medium text-green ${item.status === "Declined" ? "text-red" : "text-green"}`}
                  >
                    <p>{item.status}</p>
                    <span>{item.amount}$</span>
                  </div>
                </div>
                <Button
                  className="mt-4 h-9 !rounded-md"
                  onClick={() => handleRepeat(item.id, item.amount)}
                >
                  Repeat
                </Button>
              </div>
            );
          })}
          {!history.length && (
            <p className="text-sm text-grey">{t("History is empty")}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
