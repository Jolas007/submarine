import React, { useEffect } from "react";
import useAppRoutes from "./customHook/useAppRoute";
import { RouterProvider } from "react-router-dom";
import { useAppDispatch } from "./redux/slices/hook/hook";
import { getCategories } from "./redux/slices/category/thunk";
function App(): JSX.Element {
  const router = useAppRoutes();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
