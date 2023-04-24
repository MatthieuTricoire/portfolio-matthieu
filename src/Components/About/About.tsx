import { FC } from "react";
import "./About.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

import photo from "../../assets/img/Photojpeg.jpeg";

import { HashLink as Link } from "react-router-hash-link";

const About: FC = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        About <span>Me</span>
      </h2>

      <div className="about-img">
        <img src={photo} alt="Photo de Matthieu" />
        <span className="circle-spin"></span>
      </div>

      <div className="about-content">
        <h3>Développeur Frontend !</h3>
        <p>
          Curieux et touche à tout, j'aime apprendre au quotidien. Passionné par
          la technologie, je me suis lancé dans une toute nouvelle aventure
          cette année. Si je ne suis pas derrière mon pc entrain de coder, c'est
          que je suis en montagne entrain de remplir ma carte SD.
        </p>
      </div>

      <div className="btn-box btnsocial">
        <Link to="/" className="btn">
          Mon CV
        </Link>
      </div>
      <div className="goto">
        <Link to="#home" className="arrow previous active">
          <AiOutlineArrowUp size={24} />
        </Link>

        <Link to="#education" className="arrow next active">
          <AiOutlineArrowDown size={24} />
        </Link>
      </div>
    </section>
  );
};

export default About;
