import React from "react";
import "../stylesheet/home.css";
import Header from "../component/Header";
import Couresel from "../component/Couresel";
import rt from "../images/react.svg";

const Home = () => {
  return (
    <div>
      <section className="bg intro">
        <Header />

        <div className="d-flex flex-column align-items-center justify-content-center para">
          <div className="title">
            <h3 className="heading" data-aos="fade-up">
              Abdullah Al Roman
            </h3>
            <div className="d-flex">
              <h3 className="bio">React Developer,</h3>
              <button className="primary">Get Started</button>
            </div>
          </div>
        </div>
        <Couresel />
      </section>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001220"
            fill-opacity="1"
            d="M0,128L30,122.7C60,117,120,107,180,122.7C240,139,300,181,360,213.3C420,245,480,267,540,250.7C600,235,660,181,720,176C780,171,840,213,900,240C960,267,1020,277,1080,256C1140,235,1200,181,1260,181.3C1320,181,1380,235,1410,261.3L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="react">
        <div className="container ">
          <div className="row justify-content-start ">
            <div className="col-md-4">
              <div className="box p-5">
                <h1>Yes You Are Right</h1>
                <p>I am Front-end React Developer</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div>
                <img src={rt} alt="react" className="img-fluid p-5" />
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-md-4">
              <div className="box p-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores dolore sunt enim, eius voluptate hic nihil et ipsum
                  laborum id molestiae dolor ducimus ipsa asperiores laboriosam,
                  velit voluptatem accusantium ut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Experience */}

      <div className="container mt-5 ">
        <div className="row box exp p-5">
          <div className="col-md-4 ">
            <h3>Front-End</h3>
            <hr />
            <p>HTML,CSS,JAVASCRIPT</p>
            <p>BOOSTRAP,TAILWIND,REACT</p>
          </div>
          <div className="col-md-4 ">
            <h3>MICROSOFT OFFICE</h3>
            <hr />
            <p>MS WORD, POWERPOINT</p>
            <p>MS EXCEL,GOOGLE SHEET</p>
          </div>
          <div className="col-md-4">
            <h3>LEADERSHIP</h3>
            <hr />
            <p>FORMER OPERATION ASSOCIATE</p>
            <p>HR BANGLADESH, DHAKA</p>
          </div>
        </div>
      </div>
      <div className="who d-flex justify-content-center">
        <div className="last box d-flex justify-content-center">
          <p className="p-2">
            <pre>
              {JSON.stringify(
                {
                  name: "Abdullah Al Roman",
                  from: "Dhaka,Bangladesh ",
                  gender: "Male",
                },
                null,
                2
              )}
            </pre>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
