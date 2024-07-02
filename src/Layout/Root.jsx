import { Outlet } from "react-router-dom";
import NavBar from "../pages/navbar/Navbar";
import Footer from "../pages/footer/Footer";

const Root = () => {
   return (
      <div>
         <NavBar></NavBar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Root;