import "./style.css";
import HeadNavbar from "../../components/Header";
import Main from "../../components/Main";

function Home() {
  return (
    <div className="home-content">
      <HeadNavbar></HeadNavbar>
      <Main></Main>
    </div>
  );
}

export default Home;
