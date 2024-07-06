import { RouterProvider } from "react-router-dom";

import { router } from "./router";

import { useEffect, useState } from "react";
import { fetchGetProfile } from "./api/user/user";

import { useDispatch } from "react-redux";

import { userActions } from "src/store";
import { Loader } from "./modules/Loader/Loader";

const App = () => {
  const dispatch = useDispatch();

  const [initialization, setInitialization] = useState(true);

  useEffect(() => {
    const initial = async () => {
      setInitialization(true);
      try {
        const data = await fetchGetProfile();

        dispatch(userActions.setUser(data));
      } catch (error) {
        console.log({ error });
        dispatch(userActions.onLogout());
      } finally {
        setInitialization(false);
      }
    };

    initial();
  }, []);

  if (initialization) {
    return <Loader />;
  }

  return <RouterProvider router={router} />;
};

export default App;
