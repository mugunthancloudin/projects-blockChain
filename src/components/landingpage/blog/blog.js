import React from "react";
import blogJsonData from "../../datas/blog/blogData.json";
import TruncatedDescription from "./truncatedDescription ";
import "./blog.css";

export default function Blog() {
  const projects = blogJsonData.projects;
  console.log(projects);
  return (
    <>
    <div className="container-fluid blogBg pt-5 pb-5" id="action7">
    <div className="container">
        <h1 className="text-center blogH1">A Glance of Our Blogs</h1>
        <div className="row mt-5">
          {projects.map((product) => (
            <div key={product.id} className="col-lg-4 mb-4">
              <div className="card blogCard">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{product.title}</h5>{" "}
                  <h6 className="card-title fw-bold">{product.info}</h6>
                  <TruncatedDescription description={product.description} maxLength={150} /> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      
    </>
  );
}
