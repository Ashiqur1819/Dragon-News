import { Link, NavLink } from "react-router-dom";
import userIcon from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)

    return (
      <div className="grid grid-cols-3 items-center justify-between gap-6">
        <div>{user && <h2>{user?.email}</h2>}</div>
        <div className="space-x-12 flex items-center justify-center text-gray-600">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className="flex items-center justify-end gap-6">
          {
            user ? <div className="flex items-center gap-2">
              <p className="text-green-600 font-medium">{user?.displayName}</p>
              <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
            </div> :  <figure>
            <img src={userIcon} className="w-10/12" alt="" />
          </figure>
          }
         
          {user && user?.email ? (
            <button onClick={logOut} className=" bg-[#403F3F] px-6 py-2 text-white font-medium rounded-sm">
              Log Out
            </button>
          ) : (
            <Link
              to="auth/login"
              className="bg-[#403F3F] px-6 py-2 text-white font-medium rounded-sm"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;