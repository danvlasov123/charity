import { useState } from "react";

import { format } from "date-fns";
import cn from "classnames";
import { Button } from "src/components/ui";
import { useNavigate } from "react-router-dom";

import { PAGES_PATH } from "src/router";

const data = [
  {
    title: "AFRICA",
    id: 1,
    content:
      "Important Message, Darlings Please take a minute to listen Important Message, Darlings Please take a minute to listenImportant Message, Darlings Please take a minute to listenImportant Message, Darlings Please take a minute to listenImportant Message, Darlings Please take a minute to listen",
    date: new Date(),
    amount: 45,
    success: false,
  },
  {
    title: "AFRICA",
    id: 2,
    content:
      "Important Message, Darlings Please take a minute to listen Important Message, Darlings Please take a minute to listenImportant Message, Darlings Please take a minute to listenImportant Message, Darlings Please take a minute to listenImportant Message, Darlings Please take a minute to listen",
    date: new Date(),
    amount: 45,
    success: false,
  },
  {
    title: "AFRICA",
    id: 3,
    content:
      "Important Message, Darlings Please take a minute to listen Important Message, Darlings Please take a minute to listenImportant Message, Darlings Please take a minute to listenImportant Message, Darlings Please take a minute to listenImportant Message, Darlings Please take a minute to listen",
    date: new Date(),
    amount: 45,
    success: true,
  },
  {
    title: "AFRICA",
    id: 4,
    content:
      "Important Message, Darlings Please take a minute to listen Important Message, Darlings Please take a minute to listenImportant Message, Darlings Please take a minute to listenImportant Message, Darlings Please take a minute to listenImportant Message, Darlings Please take a minute to listen",
    date: new Date(),
    amount: 45,
    success: true,
  },
  {
    title: "AFRICA",
    id: 5,
    content:
      "Important Message, Darlings Please take a minute to listen Important Message, Darlings Please take a minute to listenImportant Message, Darlings Please take a minute to listenImportant Message, Darlings Please take a minute to listenImportant Message, Darlings Please take a minute to listen",
    date: new Date(),
    amount: 45,
    success: true,
  },
];

const History = () => {
  const navigate = useNavigate();
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

  return (
    <div>
      <div className="border-light-grey-2 flex justify-end border-b px-6 py-4">
        <img src="/logo.svg" alt="logo" height={54} />
      </div>
      <div className="px-6 pt-5">
        <h1 className="text-xl font-medium leading-6">History</h1>
        <div className="flex flex-col gap-4 pt-4">
          {data.map((item) => {
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
                <div className="bg-light-grey-2 rounded-md p-4">
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
                    className={`text-green flex items-center justify-between pt-2.5 font-medium ${item.success ? "text-green" : "text-red"}`}
                  >
                    <p>{item.success ? "Approved" : "Declined"}</p>
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
        </div>
      </div>
    </div>
  );
};

export default History;