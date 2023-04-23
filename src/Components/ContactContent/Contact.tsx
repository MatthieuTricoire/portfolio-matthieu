import "./Contact.css";

import { FC } from "react";

const Contact: FC = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        <span>Me</span> contacter !
      </h2>

      <form action="#">
        <div className="input-box">
          <div className="input-field">
            <input type="text" placeholder="Nom et Prénom" required />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="text" placeholder="Adresse mail" required />
            <span className="focus"></span>
          </div>
        </div>
        <div className="input-box">
          <div className="input-field">
            <input type="number" placeholder="Téléphone" required />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="text" placeholder="Sujet du mail" required />
            <span className="focus"></span>
          </div>
        </div>

        <div className="textarea-field">
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Votre message"
            required
          ></textarea>
          <span className="focus"></span>
        </div>

        <div className="btn-box btnsocial">
          <button type="submit" className="btn">
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
