import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Components from "./components/Components";
import BooleanAlgebra from "./components/BooleanAlgebra";
import Reflection from "./components/Reflection";
import Footer from "./components/Footer";
import Code from "./components/Code";
import Videos from "./components/Videos";

import { useEffect } from "react";
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
  useEffect(() => {
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
  }, []);

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
