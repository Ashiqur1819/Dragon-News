import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex items-center bg-base-200 py-2 ">
            <p className="bg-[#D72050] px-6 py-2 text-white font-medium mx-2">Latest</p>
            <p className="font-medium">
                <Marquee pauseOnHover={true}><Link to="/news">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link></Marquee>
            </p>
        </div>
    );
};

export default LatestNews;