import { ResetEmail } from "./Steps";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const navigate = useNavigate();
  const onBack = () => navigate(-1);
  return (
    <div className="h-full">
      <button className="absolute left-6 top-6" onClick={onBack}>
        <img src="/icons/back.svg" alt="back" height={14} />
      </button>
      <div className="h-full pb-24 pt-20">
        <ResetEmail />
      </div>
    </div>
  );
};

export default Reset;
