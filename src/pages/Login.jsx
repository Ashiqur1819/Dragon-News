import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { userLogin, setUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const [error, setError] = useState()

    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const email = formData.get("email")
        const password = formData.get("password")

        userLogin(email, password)
        .then(result => {
            console.log(result)
            setUser(result.user)
            navigate(location?.state ? location.state : "/")   
        })
        .catch(err => {
            console.log(err)
            setError(err.message)
        })
    }

    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl rounded-none p-6">
          <h2 className="text-2xl font-bold text-center pt-6">
            Login Your Account
          </h2>
          <div className="divider"></div>
          <form onSubmit={handleLogin} className="card-body p-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input rounded-none bg-base-200"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input rounded-none bg-base-200"
                required
              />
              <label className="label justify-start">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-sm text-red-600"
                >
                  {error}
                </a>
              </label>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#403F3F] text-white text-base font-medium hover:bg-[#333232] rounded-none">
                Login
              </button>
            </div>
          </form>
          <p className="text-center mt-3">
            Don't Have an Account?{" "}
            <Link
              to="/auth/register"
              className="text-red-500 font-medium underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Login;