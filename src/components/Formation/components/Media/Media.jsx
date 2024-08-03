import media_1 from "../../../assets/media-1.png";
import media_2 from "../../../assets/media-2.png";
import media_3 from "../../../assets/media-3.png";
import media_4 from "../../../assets/media-4.png";

import "./Media.css";

const Media = () => {
  return (
    <div className="media_wrapper">
      <div className="media_container container">
        <div className="heading_container">
          <h2>
                LES <span>MÉDIAS</span> PARLENT DE <span>NOUS</span>
          </h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
            Ut enim ad minim veniam
          </p> */}
        </div>

        <div className="media_content d-flex justify-content-center">
          <div>
            <a
              target="_blank"
              href="https://www.lepoint.fr/economie/diaspora-idrissa-konte-donner-une-autre-dimension-aux-langues-africaines-14-07-2015-1944281_28.phps"
            >
              <img src={media_1} alt="" className="img-fluid" />
            </a>
          </div>
          <div>
            <a
              href="https://www.rfi.fr/fr/emission/20150209-apprendre-langues-africaines-paris"
              target="_blank"
            >
              {" "}
              <a
                target="_blank"
                href="https://www.rfi.fr/fr/emission/20150209-apprendre-langues-africaines-paris"
              >
                {" "}
                <img src={media_3} alt="" className="img-fluid" />
              </a>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.afriqueeconomie.net/2020/11/idrissa-konte-fondateur-de-la-plateforme-afrilangues-nous-devons-travailler-sur-cet-aspect-et-montrer-que-les-langues-africaines-peuvent-servir-doutil-de-travail-au-meme-titre-que-l"
            >
              {" "}
              <img src={media_4} alt="" className="img-fluid" />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://askan.co/2021/09/cours-de-langues-africaines-afrilangues"
            >
              {" "}
              <img src="/assets/askanlogo.jpg" alt="" className="img-fluid" />
            </a>
          </div>

          {/* <div>
            <a
              target="_blank"
              href="https://www.afriqueeconomie.net/2020/11/idrissa-konte-fondateur-de-la-plateforme-afrilangues-nous-devons-travailler-sur-cet-aspect-et-montrer-que-les-langues-africaines-peuvent-servir-doutil-de-travail-au-meme-titre-que-l"
            >
              {" "}
              <img src={media_4} alt="" className="img-fluid" />
            </a>
          </div> */}
          {/* <div>
            <a
              target="_blank"
              href="https://www.lepoint.fr/economie/diaspora-idrissa-konte-donner-une-autre-dimension-aux-langues-africaines-14-07-2015-1944281_28.phps"
            >
              <img src={media_1} alt="" className="img-fluid" />
            </a>
          </div>
          <div>
            <a
              href="https://www.rfi.fr/fr/emission/20150209-apprendre-langues-africaines-paris"
              target="_blank"
            >
              {" "}
              <img src={media_3} alt="" className="img-fluid" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Media;
