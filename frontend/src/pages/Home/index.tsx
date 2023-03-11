import "./style.css";
import HeadNavbar from "../../components/Header";
import Main from "../../components/Main";
import About from "../../components/About";
import { MobileApp } from "../../components/MobileApp";

function Home() {
  return (
    <div className="home-content">
      <HeadNavbar></HeadNavbar>
      <Main></Main>
      <About></About>
      <MobileApp></MobileApp>
    </div>
  );
}

export default Home;
