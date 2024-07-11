import { useState } from "react";
import { ResetEmail, ResetPassword } from "./Steps";
import { useNavigate, useParams } from "react-router-dom";
import { PAGES_PATH } from "src/router";

export const constants = {
  steps: {
    email: "email",
    password: "password",
  },
};

const Reset = () => {
  const { token, step = constants.steps.email } = useParams();

  const navigate = useNavigate();
  const onBack = () => navigate(-1);

  const [steps, setSteps] = useState(step);

  return (
    <div className="h-full">
      <button className="absolute left-6 top-6" onClick={onBack}>
        <img src="/icons/back.svg" alt="back" height={14} />
      </button>
      <div className="h-full pb-24 pt-20">
        {constants.steps.email === steps && <ResetEmail />}
        {constants.steps.password === steps && <ResetPassword token={token} />}
      </div>
    </div>
  );
};

export default Reset;
