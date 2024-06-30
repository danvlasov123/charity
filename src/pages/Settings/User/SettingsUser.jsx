import { useNavigate } from "react-router-dom";
import { Button } from "src/components/ui";
import { UpdateUserForm } from "src/modules/forms";
import { PAGES_PATH } from "src/router";

import { constants } from "src/components/ui";

const SettingsUser = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
  };

  const onCancel = () => {
    navigate(PAGES_PATH.settings.full);
  };
  return (
    <div className="flex h-full flex-col justify-between border-t border-grey py-5">
      <div>
        <button onClick={onCancel} className="pl-6">
          <img src="/icons/back.svg" alt="back" width={6} height={12} />
        </button>
        <div className="pt-5">
          <UpdateUserForm onSubmit={onSubmit} onCancel={onCancel} />
        </div>
      </div>
      <div className="flex gap-6 px-6">
        <Button variant={constants.variants.outline} className="bg-bg-grey">
          Go out
        </Button>
        <Button variant={constants.variants.outline} className="bg-bg-grey">
          Change account
        </Button>
      </div>
    </div>
  );
};

export default SettingsUser;
