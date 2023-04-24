import "./Projects.css";
import bleuvert from "../../assets/img/projet_bleuvert.png";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="heading">
        Mes <span>Projets</span>
      </h2>
      <div className="projects-container">
        <div className="project">
          <h3 className="title">Wordle clone</h3>
          <img src="" alt="" />
          <p>Reproduction d'une wordle</p>
          <div>
            <p>Lien github : </p>
          </div>
        </div>
        <div className="project">
          <h3 className="title">Bleuvert</h3>
          <img src="" alt="" />
          <p>
            Reprise d'une site web existant pour un bureau d'archictes
            d'intérieurs.
          </p>
          <div>
            <p>Lien github : </p>
          </div>
        </div>
        <div className="project">
          <h3 className="title">Bleuvert</h3>
          <div className="project__img">
            <img src={bleuvert} alt="" />
          </div>
          <p>
            Reprise d'un site web existant. <br /> Création d'un backoffice
            accessible pour le client afin d'alimenter le site.
          </p>
          <div className="project__details">
            <div>Développement : En cours</div>
            <div>Github</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
