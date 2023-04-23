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
                    <IoLogoJavascript size={32} />
                  </div>
                  <div className="techno">
                    <FaReact size={32} />
                  </div>
                  <div className="techno">
                    <AiOutlineHtml5 size={32} />
                  </div>
                  <div className="techno">
                    <FaCss3Alt size={32} />
                  </div>
                  <div className="techno">
                    <SiTypescript size={32} />
                  </div>
                </div>
              </div>

              <div className="progress">
                <h3>BACKEND</h3>
                <div className="bar">
                  <div className="techno">
                    <FaNodeJs size={32} />
                  </div>
                  <div className="techno">
                    <SiMongodb size={32} />
                  </div>
                  <div className="techno">
                    <FaStripeS size={32} />
                  </div>
                </div>
              </div>

              <div className="progress">
                <h3>DESIGN</h3>
                <div className="bar">
                  <div className="techno">
                    <FaFigma size={32} />
                  </div>
                  <div className="techno">
                    <SiAdobeillustrator size={32} />
                  </div>
                  <div className="techno">
                    <SiAdobelightroom size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-column">
          <h3 className="title">Professional skills</h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>
                  HTML <span>90%</span>
                </h3>
                <div className="bar"></div>
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
                  HTML <span>90%</span>
                </h3>
                <div className="bar">
                  <span></span>
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
