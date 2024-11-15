import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftAside = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
          .then((res) => res.json())
          .then((data) => setCategories(data.data.news_category))
          .catch((error) => console.log(error));
    }, [])

    return (
      <div>
        <h2 className="text-xl font-semibold">All Categories</h2>

        <div className="flex flex-col gap-3 mt-6">
          {categories.map((category) => (
            <NavLink to={`/category/${category.category_id}`} className="btn text-gray-600" key={category.category_id}>
              {category.category_name}
            </NavLink>
          ))}
        </div>
      </div>
    );
};

export default LeftAside;