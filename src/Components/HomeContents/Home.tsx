import { FC } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Home.css";

// React icons import
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Home: FC = () => {
  return (
    <section className="home " id="home">
      <div className="home-content">
        <h1>
          Salut, moi c'est <span>Matthieu !</span>
        </h1>

        <div className="text-animate">
          <h3>Recherche stage Frontend</h3>
        </div>

        <p>
          Passionné par le domaine du Web, j'ai entrepris en début d'année 2023
          une reconversion professionnelle pour devenir développeur Frontend. Si
          vous êtes à la recherche d'un développeur Frontend Junior passionné et
          motivé, n'hésitez pas à me contacter pour discuter de vos besoins.
        </p>

        <div className="btn-box">
          <Link to="#contact" className="btn">
            Me contacter
          </Link>
        </div>
      </div>

      <div className="home-email">matthieutricoire@gmail.com</div>

      <div className="home-social">
        <Link to="https://www.linkedin.com/in/matthieu-tricoire-1b410972/">
          <AiFillLinkedin size={20} className="icon" />
        </Link>
        <Link to="https://github.com/MatthieuTricoire">
          <AiFillGithub size={20} className="icon" />
        </Link>
        <Link to="https://www.instagram.com/matthieutricoire/">
          <AiFillInstagram size={20} className="icon" />
        </Link>
      </div>
      <div className="goto">
        <div className="arrow previous deactive">
          <AiOutlineArrowUp size={24} />
        </div>
        <Link to="#about" className="arrow next active">
          <AiOutlineArrowDown size={24} />
        </Link>
      </div>
    </section>
  );
};

export default Home;
