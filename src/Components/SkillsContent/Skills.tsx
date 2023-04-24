import "./Skills.css";

import { FC } from "react";

import { IoLogoJavascript } from "react-icons/io";
import {
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaStripeS,
  FaFigma,
} from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  SiTypescript,
  SiMongodb,
  SiAdobeillustrator,
  SiAdobelightroom,
} from "react-icons/si";

// type TechnoProps = {
//     size : number;
//     iconName : string;
// }
// const Techno = ({size, iconName}:TechnoProps)=>{
//     return(
//         <div className="techno">
//             <{iconName} size={size}/>
//         </div>
//     )

// }

const Skills: FC = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        Mes <span>Skills</span>
      </h2>
      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title">Développement</h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>FRONTEND</h3>
                <div className="bar">
                  <div className="techno">
                    <IoLogoJavascript size={24} />
                  </div>
                  <div className="techno">
                    <FaReact size={24} />
                  </div>
                  <div className="techno">
                    <AiOutlineHtml5 size={24} />
                  </div>
                  <div className="techno">
                    <FaCss3Alt size={24} />
                  </div>
                  <div className="techno">
                    <SiTypescript size={24} />
                  </div>
                </div>
              </div>

              <div className="progress">
                <h3>BACKEND</h3>
                <div className="bar">
                  <div className="techno">
                    <FaNodeJs size={24} />
                  </div>
                  <div className="techno">
                    <SiMongodb size={24} />
                  </div>
                  <div className="techno">
                    <FaStripeS size={24} />
                  </div>
                </div>
              </div>

              <div className="progress">
                <h3>DESIGN</h3>
                <div className="bar">
                  <div className="techno">
                    <FaFigma size={24} />
                  </div>
                  <div className="techno">
                    <SiAdobeillustrator size={24} />
                  </div>
                  <div className="techno">
                    <SiAdobelightroom size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-column">
          <h3 className="title">Compétences</h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>PROJETS</h3>
                <div className="bar">
                  <div className="soft-skill">Méthode agile</div>
                  <div className="soft-skill">Travail en équipe</div>
                  <div className="soft-skill">Force de proposition</div>
                </div>
              </div>

              <div className="progress">
                <h3>
                  HTML <span>90%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress">
                <h3>
                  LANGUES <span>90%</span>
                </h3>
                <div className="bar">
                  <div className="soft-skill">Français : maternel</div>
                  <div className="soft-skill">Anglais : professionnel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
