import Qzone from "../Qzone/Qzone";
import FindUs from "../SocialLogin/FindUs/FindUs";
import SocialLogin from "../SocialLogin/SocialLogin";


const RightAside = () => {
    return (
      <div>
        <div>
          <SocialLogin></SocialLogin>
        </div>
        <div className="mt-8">
            <FindUs></FindUs>
        </div>
        <div className="mt-8">
            <Qzone></Qzone>
        </div>
      </div>
    );
};

export default RightAside;