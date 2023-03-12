import { useInView } from "react-intersection-observer";
import About from "../../components/About";
import HeadNavbar from "../../components/Header";
import Main from "../../components/Main";
import { MobileApp } from "../../components/MobileApp";
import "./style.css";

function Home() {
  const { ref: mainRef, inView: isMainVisible } = useInView();
  const { ref: aboutRef, inView: isAboutVisible } = useInView();
  const { ref: mobileAppRef, inView: isMobileAppVisible } = useInView();

  return (
    <div className="home-content">
      <HeadNavbar></HeadNavbar>
      <section
        ref={mainRef}
        className={isMainVisible ? "home-content-visible" : ""}
      >
        <Main></Main>
      </section>
      <section
        ref={aboutRef}
        className={isAboutVisible ? "home-content-visible" : ""}
      >
        <About></About>
      </section>
      <section
        ref={mobileAppRef}
        className={isMobileAppVisible ? "home-content-visible" : ""}
      >
        <MobileApp></MobileApp>
      </section>
    </div>
  );
}

export default Home;
