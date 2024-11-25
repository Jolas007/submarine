import { Outlet } from "react-router-dom";
import Navigation from "./ui/Navigation";

export default function Layout(): JSX.Element {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
