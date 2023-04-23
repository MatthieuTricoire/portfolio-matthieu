import { FC } from "react";
import "./About.css";

import photo from "../../assets/img/Photojpeg.jpeg";
import { Link } from "react-router-dom";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          officiis blanditiis vero libero quis praesentium nesciunt nam, quo
          odio, ipsam reprehenderit voluptatum perferendis magnam expedita sed.
          Doloribus itaque quaerat natus?
        </p>
      </div>

      <div className="btn-box btnsocial">
        <Link to="/" className="btn">
          Read more
        </Link>
      </div>
    </section>
  );
};

export default About;
