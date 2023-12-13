import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import processJsonData from "../../datas/blog/blogData.json";
import "./process.css";

export default function Process() {
  const process = processJsonData.process;
  console.log(process);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container-fluid pt-5 pb-5" id="action6">
        <div className="container">
          <div className="row">
            <h1 className="fw-bold processH1 text-center mb-2">Process We Follow</h1>
          </div>
          
          {/* Use col-lg-3 layout on larger screens */}
          <div className="row d-none d-lg-flex">
            {process.map((card) => (
              <div key={card.id} className="col-lg-3 mt-4 mb-4" style={{ margin: "0 auto" }}>
                <div className="card shadow d-flex flex-column justify-content-around">
                  {/* Your card content */}
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="card-img-top p-3"
                    style={{ height: "100px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {card.id}. {card.title}
                    </h5>
                    <p className="card-text p-3 text-center">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Use carousel on smaller screens */}
          <div className="d-lg-none ">
            <Slider {...settings}>
              {process.map((card) => (
                <div key={card.id} className="p-2">
                  <div className="card">
                    {/* Your card content */}
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="card-img-top p-4"
                      style={{ height: "100px", objectFit: "contain", width: "100%" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        {card.id}. {card.title}
                      </h5>
                      <p className="card-text">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
