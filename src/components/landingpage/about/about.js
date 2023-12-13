import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/landingPage/about/aboutAi.json";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="container-fluid ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ width: "100%"}}
                className="mt-3"
              />
            </div>
            <div className="col-lg-6">
              <div className="row">
                <h2 className="aboutH2 mb-4">
                  Embrace Web3<br></br> Embrace Transformation.
                </h2>
                <p>
                  Unearth the blockchain potential to overhaul enterprise &
                  institutional processes. Antier, one of world’s pioneering
                  blockchain development companies harnesses the power of
                  decentralization and smart contracts to build scalable, asset
                  agnostic applications.
                </p>
                <p>
                  Our subject matter experts provide enterprise-grade blockchain
                  app development services ensuring transparency & immutability
                  over a distributed ledger. Ask more about our expertise in
                  DeFi 2.0, Metaverse ecosystems, DAOs, Exchanges & wallets,
                  crypto banks, NFTs and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid aboutBg" id="action2">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="aboutH1">Who We Are</h1>
              <p className="aboutP">
                A Software Development Company specializing in custom AI
                solutions, chatgpt development , and generative ai. We excel in
                developing modern digital products, driving digital
                transformation, and fostering durable growth through a seamless
                blend of business strategy, experience, and technology.
              </p>
              <p className="aboutP mt-4">
                With over 20 years of expertise, our innovation partner offers a
                wide range of services, including software development, mobile
                app development, eCommerce solutions, smart contract
                development, and other custom software development services.
              </p>
            </div>
            <div className="col-lg-4">&nbsp;</div>
          </div>
        </div>
      </div>
    </>
  );
}
