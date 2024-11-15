import { FaGithub, FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Login With</h2>
      <div className="flex flex-col gap-3 mt-6">
        <button className="btn"><FaGoogle></FaGoogle>Login with Google</button>
        <button className="btn"><FaGithub></FaGithub>Login with Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;
