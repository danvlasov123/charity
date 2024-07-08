import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PAGES_PATH } from "src/router";

const Failed = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => navigate(PAGES_PATH.main.full), 1800);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-44 w-44 items-center justify-center rounded-full bg-red">
        <img src="/icons/close.svg" alt="x" width={41} height={41} />
      </div>
    </div>
  );
};

export default Failed;
