import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Components from "./components/Components";
import BooleanAlgebra from "./components/BooleanAlgebra";
import Reflection from "./components/Reflection";
import Footer from "./components/Footer";
import Code from "./components/Code";
import Videos from "./components/Videos";

import { useEffect, useState } from "react";
import { ScrollSmoother, ScrollTrigger } from "./utils/gsap";

const ScrollToTop = (props: { children: any }) => {
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{props.children}</>;
};

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    console.log("ScrollSmoother init");

    ScrollTrigger.clearScrollMemory("manual");
    window.scrollTo(0, 0);

    const smoother = ScrollSmoother.create({
      smooth: 0.6,
      speed: 0.9,
      effects: true,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
    });

    return () => {
      smoother.kill();
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          📱 Mobile Support Coming Soon
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#666" }}>
          Please visit this site on a desktop or tablet for the best experience.
        </p>
      </div>
    );
  }

  return (
    <ScrollToTop>
      <div id="smooth-wrapper">
        <NavBar />

        <div id="smooth-content">
          <Hero />
          <BooleanAlgebra />
          <Code />
          <Components />
          <Videos />
          <Reflection />
          <Footer />
        </div>
      </div>
    </ScrollToTop>
  );
}

export default App;
