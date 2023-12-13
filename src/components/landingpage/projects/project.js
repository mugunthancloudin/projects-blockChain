import React from "react";
import "./project.css";
import BullsCallvideoSource from "../../assets/landingPage/projects/video/BullsCall.mp4";
import MediChainvideoSource from "../../assets/landingPage/projects/video/MediChain.mp4";
import DocVerificationvideoSource from "../../assets/landingPage/projects/video/Doc-Verify.mp4";
import right from "../../assets/landingPage/projects/images/rightSignol.png";
import left from "../../assets/landingPage/projects/images/leftSignol.png";

export default function Project() {
  return (
    <>
      <div className="container-fluid projectsBg pt-5 pb-5" id="action3">
        <div className="row">
          <h1 className="text-center projectTitleH1 fw-bold ">Projects</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6  mt-5 d-flex align-items-start">
              <video width="100%" loop muted controls className="rounded-3">
                <source src={BullsCallvideoSource} type="video/mp4" />
              </video>
            </div>
            <div className="col-lg-6">
              <h1 className="projectH1 text-center">Bull's-Call</h1>
              <p className="fw-bold fst-italic mt-3">
                Bulls Call is a betting game that is now available on the
                Polygon Mumbai Testnet and is based on cryptocurrency candle
                charts. Both PCs and mobile devices can use it. The owner
                receives 5% of each wager in fees. The payout is the amount you
                will be paid out after you place a wager.
              </p>
              <div className="text-center">
                <button className="bullsCall-button">
                  P L A Y
                  <div className="bullsCall-clip">
                    <div className="bullsCall-corner bullsCall-left-top"></div>
                    <div className="bullsCall-corner bullsCall-right-bottom"></div>
                    <div className="bullsCall-corner bullsCall-right-top"></div>
                    <div className="bullsCall-corner bullsCall-left-bottom"></div>
                  </div>
                  <span className="bullsCall-arrow bullsCall-right-arrow"></span>
                  <span className="bullsCall-arrow bullsCall-left-arrow"></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container" id="action4">
          <div className="row ">
            <div className="col-lg-6 order-lg-1 order-sm-2">
              <h1 className="projectH1  text-center">MediChain</h1>
              <p className="fw-bold fst-italic mt-3">
                Bulls Call is a betting game that is now available on the
                Polygon Mumbai Testnet and is based on cryptocurrency candle
                charts. Both PCs and mobile devices can use it. The owner
                receives 5% of each wager in fees. The payout is the amount you
                will be paid out after you place a wager.
              </p>
              <div className="text-center justify-content-center align-items-center d-flex">
                <div class="container-button mt-5">
                  <div className="container-button">
                    <div className="custom-hover bt-1"></div>
                    <div className="custom-hover bt-2"></div>
                    <div className="custom-hover bt-3"></div>
                    <div className="custom-hover bt-4"></div>
                    <div className="custom-hover bt-5"></div>
                    <div className="custom-hover bt-6"></div>
                    <button className="custom-button"></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 d-flex align-items-start order-lg-2 order-sm-1">
              <video width="100%" loop muted controls className="rounded-3">
                <source src={MediChainvideoSource} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="container" id="action5">
          <div className="row">
            <div className="col-lg-6  mt-5 d-flex align-items-start">
              <video width="100%" loop muted controls className="rounded-3">
                <source src={DocVerificationvideoSource} type="video/mp4" />
              </video>
            </div>
            <div className="col-lg-6">
              <h1 className="projectH1 text-center">Doc-Verify</h1>
              <p className="fw-bold fst-italic mt-3">
                Bulls Call is a betting game that is now available on the
                Polygon Mumbai Testnet and is based on cryptocurrency candle
                charts. Both PCs and mobile devices can use it. The owner
                receives 5% of each wager in fees. The payout is the amount you
                will be paid out after you place a wager.
              </p>
              <div className="text-center">
                <button className="doc-button">Verify Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
