import { RouterProvider } from "react-router-dom";

import { router } from "./router";

const App = () => {
  return (
    <div className="h-[100dvh] overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
