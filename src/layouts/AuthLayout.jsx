import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const AuthLayout = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 bg-base-200">
        <div className="py-6">
          <Navbar></Navbar>
        </div>
        <div>
        <Outlet></Outlet>
        </div>
      </div>
    );
};

export default AuthLayout;