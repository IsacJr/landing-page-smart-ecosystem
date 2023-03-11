import "./style.css";
import HeadNavbar from "../../components/Header";
import Main from "../../components/Main";
import About from "../../components/About";

function Home() {
  return (
    <div className="home-content">
      <HeadNavbar></HeadNavbar>
      <Main></Main>
      <About></About>
    </div>
  );
}

export default Home;
