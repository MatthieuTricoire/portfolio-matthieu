import "./Eduction.css";
import { FC } from "react";
import { HashLink as Link } from "react-router-hash-link";

// Reac icons import
import {
  AiOutlineCalendar,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Education: FC = () => {
  return (
    <section className="education" id="education">
      <h2 className="heading">
        Mon <span>Parcours</span>
      </h2>

      <div className="education-row">
        <div className="education-column">
          <h3 className="title">Parcours</h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="content__header">
                  <div className="year">
                    <AiOutlineCalendar size={24} /> Janvier 2023 - Mars 2023
                  </div>
                  <div className="location">Distanciel</div>
                </div>

                <h3>Le Reacteur</h3>
                <p>
                  Formation intensive pendant laquelle on aborde aussi bien la
                  partie Frontend que le partie Backend. L'enseignement est
                  construit autour de la stack "MERN" et se base sur la
                  réalistion de projets pour assimiler les notions. <br />
                  Pendant les deux dernière semaines, on travaille en équipe
                  pour réaliser le MVP d'un porteur d'affaire.
                </p>
                <p>
                  <span className="txt-highlight">Projet de fin - Kalculo</span>
                  : Réalisation d'une application mobile pour le suivi d'un
                  régime cétogène
                </p>
                <p>
                  <span className="txt-highlight">Projet de certification</span>
                  : Réalisation d'une site de e-commerce.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="content__header">
                  <div className="year">
                    <AiOutlineCalendar size={24} /> 2007-2012
                  </div>
                  <div className="location">
                    Université des Sciences - Montpellier
                  </div>
                </div>

                <h3>M2 - Gestion et Évaluation de la ressource en eau</h3>
                <p></p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="content__header">
                  <div className="year">
                    <AiOutlineCalendar size={24} /> 2005-2007
                  </div>
                  <div className="location">IUT - Montpellier</div>
                </div>

                <h3>DUT - Informatique de gestion</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <div className="education-column">
          <h3 className="title">Expérience</h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="content__header">
                  <div className="year">
                    <AiOutlineCalendar size={24} /> 2018-2022
                  </div>
                  <div className="location">TotalEnergies - Pau</div>
                </div>

                <h3>Proxy Product Owner</h3>
                <p>
                  Participations à la création et au déploiement de plusieurs
                  plugins liés au domaine du réservoir au sein d' un logiciel
                  interne au client. <br />
                  Participation à la phase de lancement d'une plateforme web
                  interne pour du knowledge management.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="content__header">
                  <div className="year">
                    <AiOutlineCalendar size={24} /> 2012-2017
                  </div>
                  <div className="location">IUT - Montpellier</div>
                </div>

                <h3>Ingénieur projet</h3>
                <p>
                  Élaboration des spécifications métiers de différents logiciels
                  et plugins autour du domaine des géostatistiques.
                  <br />
                  Tierce recete applicative, et formation sur les plugins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="goto">
        <Link to="#about" className="arrow previous active">
          <AiOutlineArrowUp size={24} />
        </Link>

        <Link to="#skills" className="arrow next active">
          <AiOutlineArrowDown size={24} />
        </Link>
      </div>
    </section>
  );
};

export default Education;
