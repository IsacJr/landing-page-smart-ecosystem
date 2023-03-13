import "./style.css";
import { useInView } from "react-intersection-observer";
import HeadNavbar from "../../components/Header";
import Main from "./sections/Main";
import About from "./sections/About";
import { MobileApp } from "./sections/MobileApp";
import { Product } from "./sections/Product";
import { Download } from "./sections/Download";

function Home() {
  const { ref: mainRef, inView: isMainVisible } = useInView();
  const { ref: aboutRef, inView: isAboutVisible } = useInView();
  const { ref: mobileAppRef, inView: isMobileAppVisible } = useInView();
  const { ref: productRef, inView: isProductVisible } = useInView();
  const { ref: downloadRef, inView: isDownloadVisible } = useInView();

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
      <section
        ref={productRef}
        className={isProductVisible ? "home-content-visible" : ""}
      >
        <Product></Product>
      </section>
      <section
        ref={downloadRef}
        className={isDownloadVisible ? "home-content-visible" : ""}
      >
        <Download></Download>
      </section>
    </div>
  );
}

export default Home;
