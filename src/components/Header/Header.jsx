import moment from "moment";
import logo from "../../assets/logo.png"

const Header = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-2 pt-6">
        <figure>
          <img src={logo} className="w-96" alt="" />
        </figure>
        <h3 className="text-gray-500 font-medium text-lg">Journalism Without Fear or Favour</h3>
        <p className="text-gray-600 font-medium"><span className="text-gray-900">{moment().format('dddd')}</span> {moment().format('MMMM Do YYYY')}</p>
      </div>
    );
};

export default Header;