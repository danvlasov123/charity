import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PAGES_PATH } from "src/router";

const Success = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => navigate(PAGES_PATH.main.full), 1800);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-44 w-44 items-center justify-center rounded-full bg-green">
        <img src="/icons/check.svg" alt="check" width={56} height={56} />
      </div>
    </div>
  );
};

export default Success;
