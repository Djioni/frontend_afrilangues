import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_container container">
        <div className="footer_links">
          <div className="footer_link_box">
            <p>A Propos</p>
            <ul>
              <li>
                <a href="#">Méthode</a>
              </li>
              <li>
                <a href="#">Mission</a>
              </li>
              <li>
                <a href="#">Équipe</a>
              </li>
              <li>
                <a href="#">Le blog</a>
              </li>
              <li>
                <a href="#">Recrutement</a>
              </li>
              <li>
                <a href="#">Assistance</a>
              </li>
            </ul>
          </div>
          <div className="footer_link_box">
            <p>Apprendre des Langues Africaines</p>
            <ul>
              <li>
                <a href="#">Apprendre le bambara </a>
              </li>
              <li>
                <a href="#">Apprendre le lingala</a>
              </li>
              <li>
                <a href="#">Apprendre le wolof</a>
              </li>
              <li>
                <a href="#">Apprendre le soninké</a>
              </li>
              <li>
                <a href="#">Apprendre le laari</a>
              </li>
              <li>
                <a href="#">Apprendre le duala</a>
              </li>
              <li>
                <a href="#">Apprendre le bassa</a>
              </li>
            </ul>
          </div>
          <div className="footer_link_box">
            <p>Afrilangues pour les pros</p>
            <ul>
              <li>
                <a href="#">Pour les écoles</a>
              </li>
              <li>
                <a href="#">Pour les entreprises</a>
              </li>
              <li>
                <a href="#">Partenariats</a>
              </li>
              <li>
                <a href="#">Presse</a>
              </li>
            </ul>
          </div>
          <div className="footer_link_box">
            <p>Conditions</p>
            <ul>
              <li>
                <a href="#">Terms of Sales</a>
              </li>
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="footer_link_box">
            <p>Social</p>

            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Tik tok</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="copyright_text">
        AFRILANGUES © 2023, Tous droits réservés.
      </p>
    </div>
  );
};

export default Footer;
