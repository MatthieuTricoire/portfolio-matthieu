import { HashLink as Link } from "react-router-hash-link";
import "./Footer.css";

import { BsFillArrowUpCircleFill } from "react-icons/bs";

import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2023 by Matthieu | Tous droits réservés </p>
      </div>

      <div className="footer-iconTop">
        <Link to="#">
          <BsFillArrowUpCircleFill className="icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
