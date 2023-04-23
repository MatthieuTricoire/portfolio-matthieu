import { FC } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// React icons import
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMenu,
} from "react-icons/ai";

const Home: FC = () => {
  return (
    <section className="home animate" id="home">
      <div className="home-content">
        <h1>
          Salut, moi c'est <span>Matthieu Tricoire</span>
        </h1>

        <div className="text-animate">
          <h3>Recherche stage Frontend</h3>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          quasi praesentium quas nihil quam alias minima magnam facere sequi
          reprehenderit delectus, obcaecati tenetur quidem provident accusantium
          iure, voluptas omnis illo.
        </p>

        <div className="btn-box">
          <Link to="/" className="btn">
            M'engager
          </Link>
          <Link to="/" className="btn">
            Discutons
          </Link>
        </div>
      </div>

      <div className="home-social">
        <Link to="/">
          <AiFillLinkedin size={20} className="icon" />
        </Link>
        <Link to="/">
          <AiFillGithub size={20} className="icon" />
        </Link>
        <Link to="/">
          <AiFillInstagram size={20} className="icon" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
