import "./Eduction.css";
import { FC } from "react";

// Reac icons import
import { AiOutlineCalendar } from "react-icons/ai";

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
                <div className="year">
                  <AiOutlineCalendar size={24} /> Janvier 2023 - Mars 2023
                </div>

                <h3>Le Reacteur</h3>
                <p>
                  Bootcamp intensif sur une durée de 10 semaines. Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Temporibus rerum
                  dicta similique vitae? Qui consequatur ab quod odio harum hic
                  dignissimos modi quis nobis, incidunt esse id aliquid nam
                  maxime.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">
                  <AiOutlineCalendar size={24} /> 2007-2012
                </div>

                <h3>Master 2 - Gestion et Évaluation de la ressource en eau</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus rerum dicta similique vitae? Qui consequatur ab
                  quod odio harum hic dignissimos modi quis nobis, incidunt esse
                  id aliquid nam maxime.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">
                  <AiOutlineCalendar size={24} /> 2005-2007
                </div>

                <h3>DUT - Informatique de gestion</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus rerum dicta similique vitae? Qui consequatur ab
                  quod odio harum hic dignissimos modi quis nobis, incidunt esse
                  id aliquid nam maxime.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="education-column">
          <h3 className="title">Expérience</h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <AiOutlineCalendar size={24} /> Janvier 2023 - Mars 2023
                </div>

                <h3>Proxy Product Owner</h3>
                <p>
                  Bootcamp intensif sur une durée de 10 semaines. Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Temporibus rerum
                  dicta similique vitae? Qui consequatur ab quod odio harum hic
                  dignissimos modi quis nobis, incidunt esse id aliquid nam
                  maxime.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">
                  <AiOutlineCalendar size={24} /> 2007-2012
                </div>

                <h3>Ingénieur projet</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus rerum dicta similique vitae? Qui consequatur ab
                  quod odio harum hic dignissimos modi quis nobis, incidunt esse
                  id aliquid nam maxime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
