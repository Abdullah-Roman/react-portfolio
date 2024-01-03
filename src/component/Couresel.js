import React from "react";
import "../stylesheet/couresel.css";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";

const Couresel = () => {
  return (
    <div className="courosel">
      <h1 className="heading-courosel ">Technologes I use</h1>
      <div className="gallery mx-auto">
        <span style={{ "--i": 1 }}>
          <FaHtml5 color="orange" />
        </span>

        <span style={{ "--i": 2 }}>
          <FaCss3Alt color="blue" />
        </span>
        <span style={{ "--i": 3 }}>
          <TbBrandJavascript color="yellow" />
        </span>
        <span style={{ "--i": 4 }}>
          <FaReact color="cyan" />
        </span>
        <span style={{ "--i": 5 }}>
          <SiTailwindcss color="blue" />
        </span>
        <span style={{ "--i": 6 }}>
          <BsBootstrapFill color="blue" />
        </span>
      </div>
    </div>
  );
};

export default Couresel;
