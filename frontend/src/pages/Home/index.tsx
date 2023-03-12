import { useInView } from "react-intersection-observer";
import About from "../../components/About";
import { Download } from "../../components/Download";
import HeadNavbar from "../../components/Header";
import Main from "../../components/Main";
import { MobileApp } from "../../components/MobileApp";
import { Product } from "../../components/Product";
import "./style.css";

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
