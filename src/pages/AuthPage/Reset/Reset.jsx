import { useState } from "react";
import { ResetEmail, ResetCode, ResetPassword } from "./Steps";
import { useNavigate } from "react-router-dom";
import { PAGES_PATH } from "src/router";

export const constants = {
  steps: {
    email: "email",
    code: "code",
    password: "password",
  },
};

const Reset = () => {
  const navigate = useNavigate();
  const onBack = () => navigate(-1);

  const [steps, setSteps] = useState(constants.steps.password);

  const onSubmit = (step) => setSteps(step);

  const onFinish = () => navigate(PAGES_PATH.login.full);

  return (
    <div className="h-full">
      <button className="absolute left-6 top-6" onClick={onBack}>
        <img src="/icons/back.svg" alt="back" height={14} />
      </button>
      <div className="h-full pb-24 pt-20">
        {constants.steps.email === steps && <ResetEmail onSubmit={onSubmit} />}
        {constants.steps.code === steps && <ResetCode onSubmit={onSubmit} />}
        {constants.steps.password === steps && (
          <ResetPassword onSubmit={onFinish} />
        )}
      </div>
    </div>
  );
};

export default Reset;
