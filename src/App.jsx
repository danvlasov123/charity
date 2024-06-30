import { RouterProvider } from "react-router-dom";

import { router } from "./router";

import { store } from "src/store/";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { fetchGetProfile } from "./api/user/user";

const App = () => {
  useEffect(() => {
    const initial = async () => {
      await fetchGetProfile();
    };

    initial();
  }, []);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
