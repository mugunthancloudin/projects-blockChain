import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import "./home.css";
import Lottie from "lottie-react";
import homeLottie from "../../assets/landingPage/Home/homelottie.json";
import scrollUp from "../../assets/landingPage/Home/scrollUp.json";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    setShowScrollButton(window.scrollY > 200);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container-fluid homeBg" id="action1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-white">
              <h1 className="homeH1  fw-bold">
                Enterprice Software Devlopment
              </h1>
              <h4 className="homeH4">
                Empowering Business With next-gen solutions to drive business
                growth
              </h4>
              <button className="homeBtn">
                GET A QUOTE NOW <span className="homeSpan">&rarr;</span>
              </button>
            </div>
            <div className="col-lg-6">
              <Lottie
                animationData={homeLottie}
                loop={true}
                autoplay={true}
                style={{ width: "500px", height: "500px" }}
                className="mt-3"
              />
            </div>{" "}
          </div>
          <div>
          <Lottie
                animationData={scrollUp}
                loop={true}
                autoplay={true}
                onClick={scrollToTop}
                style={{
                  position: "fixed",
                  bottom: "20px",
                  right: "20px",
                  height: "100px",
                  cursor: "pointer",
                  opacity: showScrollButton ? 1 : 0,
                  visibility: showScrollButton ? "visible" : "hidden",
                  transition: "opacity 0.3s, visibility 0.3s",
                }}
                className="mt-3"
              />
          </div>
          
        
        </div>
      </div>
    </>
  );
}
