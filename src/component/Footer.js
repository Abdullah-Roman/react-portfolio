import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFC107"
            fill-opacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,144C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="footer bg-warning">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3 className="text-white">Design and Developed By</h3>
            <hr />
            <h4 className="text-white">Abdullah Al Roman</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
