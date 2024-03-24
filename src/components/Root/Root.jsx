import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div className="">
      <Header></Header>

      <div className="min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
