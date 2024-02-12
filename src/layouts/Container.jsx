import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Container() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Container;
