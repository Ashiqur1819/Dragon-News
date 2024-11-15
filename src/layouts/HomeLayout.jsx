import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import LeftAside from "../components/layout components/LeftAside";
import MainContent from "../components/layout components/MainContent";
import RightAside from "../components/layout components/RightAside";
import Navbar from "../components/Navbar/Navbar";

const HomeLayout = () => {
    return (
      <div className="max-w-7xl mx-auto font-poppins">
        <header>
          <Header></Header>
          <section className="w-11/12 mx-auto mt-6">
            <LatestNews></LatestNews>
          </section>
        </header>
        <nav className="w-11/12 mx-auto mt-12">
          <Navbar></Navbar>
        </nav>
        <main className="w-11/12 mx-auto mt-12 grid lg:grid-cols-12 gap-6">
          <aside className="col-span-3">
            <LeftAside></LeftAside>
          </aside>
          <section className="col-span-6">
            <MainContent></MainContent>
            
          </section>
          <aside className="col-span-3">
            <RightAside></RightAside>
            </aside>
        </main>
      </div>
    );
};

export default HomeLayout;