import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { CookiesModal } from "../components/cookiesModal/Cookies-modal";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <CookiesModal />
    </>
  );
};
