import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard/NewsCard";


const CategoryNews = () => {

    const {data:news} = useLoaderData()

    return (
        <div>
            <h2 className="text-xl font-semibold">Dragon News Home</h2>

            <div className="mt-6">
                {
                    news.map(singleNews => <NewsCard news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;