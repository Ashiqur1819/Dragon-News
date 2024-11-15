import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";


const FindUs = () => {
    return (
      <div>
        <h2 className="text-xl font-semibold">Find Us On</h2>

        <div className="join flex join-vertical rounded-none mt-6 *:bg-white">
          <button className="btn justify-start rounded-none border border-gray-300 join-item"><FaFacebook></FaFacebook> Facebook</button>
          <button className="btn justify-start rounded-none border border-gray-300 join-item"><FaTwitter></FaTwitter> Twitter</button>
          <button className="btn justify-start rounded-none border border-gray-300 join-item"><FaInstagram></FaInstagram> Instagram</button>
        </div>
      </div>
    );
};

export default FindUs;