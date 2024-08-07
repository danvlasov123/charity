import { useNavigate } from "react-router-dom";
import { UpdatePasswordForm } from "src/modules/forms";
import { PAGES_PATH } from "src/router";

import { fetchPostChangePassword } from "src/api/auth/auth";

const SettingsPassword = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const data = {
      password: values["new-password"],
      confirmPassword: values["new-password"],
    };

    const response = await fetchPostChangePassword(data);

    if (response.success) {
      navigate(PAGES_PATH.success.full);
    }
  };

  const onCancel = () => {
    navigate(PAGES_PATH.settings.full);
  };
  return (
    <div className="border-t border-grey py-5">
      <button onClick={onCancel} className="pl-6">
        <img src="/icons/back.svg" alt="back" width={6} height={12} />
      </button>
      <div className="pt-5">
        <UpdatePasswordForm onSubmit={onSubmit} onCancel={onCancel} />
      </div>
    </div>
  );
};

export default SettingsPassword;
