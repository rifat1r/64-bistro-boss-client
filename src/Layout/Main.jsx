import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../page/shared/Navbar";
import Footer from "../page/shared/Footer";

const Main = () => {
  const location = useLocation();
  const noHeaderFoooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {noHeaderFoooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFoooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
