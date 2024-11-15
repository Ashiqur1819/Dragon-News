import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const { createNewUser, setUser, updateUserProfile } =
      useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target);
        const name = formData.get("name");
        const photo = formData.get("photo");
        const email = formData.get("email");
        const password = formData.get("password");
        console.log({name, photo, email, password})

        createNewUser(email, password)
          .then((result) => {
            setUser(result.user)
            navigate("/")
            updateUserProfile({ displayName: name, photoURL: photo }).then(
              () => {
                navigate("/");
              }
            );
            console.log(result);
          })
          .catch((error) => console.log(error));
    }

    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl rounded-none p-6">
          <h2 className="text-2xl font-bold text-center pt-6">
            Register Your Account
          </h2>
          <div className="divider"></div>
          <form onSubmit={handleRegister} className="card-body p-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input rounded-none bg-base-200"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo url"
                className="input rounded-none bg-base-200"
                required
              />
            </div>
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
            </div>
            <div className="flex items-center gap-3 mt-3">
              <input type="checkbox" className="checkbox rounded-md" />
              <p>Accept Terms and Conditions</p>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#403F3F] text-white text-base font-medium hover:bg-[#333232] rounded-none">
                Register
              </button>
            </div>
          </form>
          <p className="text-center mt-3">
            Already Have an Account!{" "}
            <Link
              to="/auth/login"
              className="text-red-500 font-medium underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;