import { useNavigate } from "react-router-dom";
import { Button } from "src/components/ui";
import { UpdateUserForm } from "src/modules/forms";
import { PAGES_PATH } from "src/router";

import { constants } from "src/components/ui";

import { useFormik } from "formik";

import { UpdateUserSchema } from "src/utils/validation-schemas";

import { useUser } from "src/hooks";

import { fetchPostProfile } from "src/api/user/user";

const SettingsUser = () => {
  const navigate = useNavigate();
  const {
    state: { user },
    dispatch,
    userActions,
  } = useUser();

  const onCancel = () => {
    navigate(PAGES_PATH.settings.full);
  };

  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
    },
    validationSchema: UpdateUserSchema,
    onSubmit: async (values) => {
      const data = await fetchPostProfile(values);

      if (data.success) {
        dispatch(userActions.setUser(data));
      }

      onCancel();
    },
  });

  return (
    <div className="flex h-full flex-col justify-between border-t border-grey py-5">
      <div>
        <button onClick={onCancel} className="pl-6">
          <img src="/icons/back.svg" alt="back" width={6} height={12} />
        </button>
        <div className="pt-5">
          <UpdateUserForm formik={formik} onCancel={onCancel} />
        </div>
      </div>
      <div className="flex gap-6 px-6">
        <Button
          variant={constants.variants.outline}
          className="bg-bg-grey"
          onClick={() => dispatch(userActions.onLogout())}
        >
          Go out
        </Button>
        <Button
          variant={constants.variants.outline}
          className="bg-bg-grey"
          onClick={() => dispatch(userActions.onLogout())}
        >
          Change account
        </Button>
      </div>
    </div>
  );
};

export default SettingsUser;
