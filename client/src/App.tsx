import React from "react";
import useAppRoutes from "./customHook/useAppRoute";
import { RouterProvider } from "react-router-dom";
function App(): JSX.Element {
  const router = useAppRoutes();

  useEffec
  return <RouterProvider router={router} />;
}

export default App;
