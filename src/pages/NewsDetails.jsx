import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header/Header";
import RightAside from "../components/layout components/RightAside";


const NewsDetails = () => {

    const data = useLoaderData()
    const news = (data.data[0])

    return (
      <div>
        <header>
          <Header></Header>
        </header>
        <main className="max-w-7xl mx-auto px-4 md:px-8 lg-px-12 grid lg:grid-cols-12 gap-6 mt-12">
          <section className="col-span-9">
            <h2 className="text-xl font-bold">Dragon News</h2>

            <div className="card shadow-xl">
              <div className="card-body">
                <figure>
                  <img
                    src={news?.image_url}
                    className="w-full object-cover"
                    alt={news?.title}
                  />
                </figure>
                <h2 className="card-title text-2xl font-bold my-5">
                  {news.title}
                </h2>
                <p className="text-justify">{news?.details}</p>
                <div className="card-actions justify-start mt-6">
                  <Link
                    to={`/category/${news?.category_id}`}
                    className="btn bg-[#D72050] hover:bg-[#971639] text-white text-base"
                  >
                    All news in this category
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <aside className="col-span-3">
            <RightAside></RightAside>
          </aside>
        </main>
      </div>
    );
};

export default NewsDetails;