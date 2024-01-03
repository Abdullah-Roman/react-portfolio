import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import "../stylesheet/project.css";
import Header from "../component/Header";

const Project = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 col-sm-12 text-center box m-2 p-2">
            <h1>Projects</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis quam quo atque corporis eveniet consequuntur assumenda!
              Vero labore blanditiis, nostrum similique quae iste animi
              obcaecati repudiandae rem harum asperiores aut?
            </p>
            <button className="primary">Get Started</button>
          </div>
          <div className="col-md-5 col-sm-12 position-relative box m-2">
            <FaLaptopCode className="laptop position-absolute top-50 start-50 translate-middle" />
          </div>
        </div>
      </div>
      <div className="container project">
        <div className="row justify-content-center">
          <h3 className="p-5">Take a look at our projects</h3>
          <hr className="mb-5" />
          <div className="col-md-4 pic me-5 position-relative">
            <img
              className="img-fluid p-2"
              src="https://sheysathya-lite.netlify.app/images/socialmedia.svg"
              alt=""
            />
            <div className="overlay">
              <h3>Project Title</h3>
              <p className="text-center m-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti quaerat minima quisquam laboriosam consequuntur
                doloremque nam recusandae sit culpa odio.
              </p>
              <button className="primary">Live View</button>
            </div>
          </div>
          <div className="col-md-4 pic me-5 position-relative">
            <img
              className="img-fluid p-2"
              src="https://sheysathya-lite.netlify.app/images/socialmedia.svg"
              alt=""
            />
            <div className="overlay">
              <h3>Project Title</h3>
              <p className="text-center m-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti quaerat minima quisquam laboriosam consequuntur
                doloremque nam recusandae sit culpa odio.
              </p>
              <button className="primary">Live View</button>
            </div>
          </div>
          <div className="col-md-4 pic me-5 position-relative">
            <img
              className="img-fluid p-2"
              src="https://sheysathya-lite.netlify.app/images/socialmedia.svg"
              alt=""
            />
            <div className="overlay">
              <h3>Project Title</h3>
              <p className="text-center m-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti quaerat minima quisquam laboriosam consequuntur
                doloremque nam recusandae sit culpa odio.
              </p>
              <button className="primary">Live View</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
