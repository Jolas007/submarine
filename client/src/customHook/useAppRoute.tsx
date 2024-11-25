import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import MainPage from "../components/pages/MainPage";

export default function useAppRoutes(): ReturnType<typeof createBrowserRouter> {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
      ],
    },
  ]);
  return router;
}
