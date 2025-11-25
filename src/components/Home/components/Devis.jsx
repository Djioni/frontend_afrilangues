import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./devis.css";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import GoogleCaptchaVerification from "../../Captcha/GoogleCaptchaComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../api";

const languageOptions = [
  { value: "afar", label: "Afar", color: "#ffcccb" },
  { value: "amharique", label: "Amharique", color: "#ffffe0" },
  { value: "arabeAlgerien", label: "Arabe algérien", color: "#e0ffff" },
  { value: "arabeEgyptien", label: "Arabe égyptien", color: "#f4cccc" },
  { value: "arabeSoudanais", label: "Arabe soudanais", color: "#d9ead3" },
  { value: "arabeTchadien", label: "Arabe tchadien", color: "#c9daf8" },
  { value: "arabeTunisien", label: "Arabe tunisien", color: "#cfe2f3" },
  { value: "arabeLitteraire", label: "Arabe littéraire", color: "#d9d2e9" },
  { value: "bambara", label: "Bambara", color: "#f4cccc" },
  { value: "comorien", label: "Comorien (Shikomori)", color: "#d9d2e9" },
  { value: "creoleCapverdien", label: "Créole capverdien", color: "#cfe2f3" },
  { value: "dazaga", label: "Dazaga", color: "#d9ead3" },
  { value: "dioula", label: "Dioula", color: "#fff2cc" },
  { value: "diakhanke", label: "Diakhanké", color: "#fce5cd" },
  { value: "ewe", label: "Éwé", color: "#d9d2e9" },
  { value: "fon", label: "Fon (fongbé)", color: "#f4cccc" },
  { value: "four", label: "Four", color: "#d9ead3" },
  { value: "gorane", label: "Gorane", color: "#cfe2f3" },
  { value: "hassaniya", label: "Hassaniya", color: "#c9daf8" },
  { value: "khassonke", label: "Khassonké", color: "#d9d2e9" },
  { value: "kikongo", label: "Kikongo", color: "#fff2cc" },
  { value: "kinyarwanda", label: "Kinyarwanda", color: "#f4cccc" },
  { value: "kirundi", label: "Kirundi", color: "#d9d2e9" },
  { value: "konianke", label: "Konianké", color: "#d9ead3" },
  { value: "kreda", label: "Kreda", color: "#cfe2f3" },
  { value: "krio", label: "Krio (créole)", color: "#c9daf8" },
  { value: "laari", label: "Laari", color: "#d9d2e9" },
  { value: "lingala", label: "Lingala", color: "#d9ead3" },
  { value: "maba", label: "Maba", color: "#fff2cc" },
  { value: "malinke", label: "Malinké (maninka)", color: "#f4cccc" },
  {
    value: "mandinka",
    label: "Mandinka (mandingo / mandingue)",
    color: "#d9d2e9",
  },
  { value: "mandjaque", label: "Mandjaque", color: "#d9ead3" },
  { value: "massalit", label: "Massalit", color: "#cfe2f3" },
  { value: "mina", label: "Mina (gɛn)", color: "#d9d2e9" },
  { value: "moore", label: "Mooré", color: "#fff2cc" },
  { value: "munukutuba", label: "Munukutuba (kituba)", color: "#f4cccc" },
  { value: "oromo", label: "Oromo", color: "#d9d2e9" },
  { value: "pidgin", label: "Pidgin", color: "#d9ead3" },
  {
    value: "pulaarSenegal",
    label: "Pulaar du Sénégal (Peul du Sénégal)",
    color: "#cfe2f3",
  },
  {
    value: "pulaarMali",
    label: "Pulaar du Mali (Peul du Mali)",
    color: "#c9daf8",
  },
  {
    value: "pulaarGuinee",
    label: "Pulaar de Guinée (Peul de Guinée)",
    color: "#d9d2e9",
  },
  { value: "sango", label: "Sango", color: "#fff2cc" },
  { value: "somali", label: "Somali", color: "#f4cccc" },
  { value: "songhay", label: "Songhay", color: "#d9d2e9" },
  { value: "soninke", label: "Soninké (Sarakolé)", color: "#d9ead3" },
  { value: "soussou", label: "Soussou", color: "#cfe2f3" },
  { value: "swahili", label: "Swahili", color: "#c9daf8" },
  { value: "tamasheq", label: "Tamasheq", color: "#d9d2e9" },
  { value: "tebou", label: "Tébou", color: "#fff2cc" },
  { value: "temne", label: "Temné", color: "#f4cccc" },
  { value: "tigrinya", label: "Tigrinya", color: "#d9d2e9" },
  { value: "toubou", label: "Toubou", color: "#d9ead3" },
  { value: "tshiluba", label: "Tshiluba (ciluba)", color: "#cfe2f3" },
  { value: "wolof", label: "Wolof", color: "#c9daf8" },
  { value: "yoruba", label: "Yoruba", color: "#d9d2e9" },
  { value: "zaghawa", label: "Zaghawa (Béri)", color: "#fff2cc" },
  { value: "zarma", label: "Zarma", color: "#f4cccc" },
  { value: "diola", label: "Diola", color: "#fce5cd" },
  { value: "kanembou", label: "Kanembou", color: "#d9ead3" },
  { value: "mboshi", label: "Mbochi", color: "#cfe2f3" },
  { value: "anglais", label: "Anglais", color: "#c9daf8" },
  { value: "français", label: "Français", color: "#c9daf8" },
  { value: "arabe", label: "Arabe", color: "#fff2cc" },
  { value: "espagnol", label: "Espagnol", color: "#d9d2e9" },
  { value: "portugais", label: "Portugais", color: "#d9d2e9" },
  { value: "italien", label: "Italien", color: "#d9d2e9" },
  { value: "dendi", label: "Dendi", color: "#c9daf8" },
];

// Sort the options alphabetically by label
const sortedLanguageOptions = languageOptions.sort((a, b) =>
  a.label.localeCompare(b.label)
);

const customStyles = {
  control: (base) => ({
    ...base,
    boxShadow:
      "rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(61, 59, 53, 0.16) 0px 0px 0px 1px, rgba(61, 59, 53, 0.08) 0px 2px 5px 0px",
    borderRadius: "5px",
    border: "0px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused
      ? state.data.color
      : state.isSelected
      ? state.data.color
      : "white",
    color: state.isFocused ? "black" : "black",
    padding: 10,
  }),
  multiValue: (base, state) => ({
    ...base,
    backgroundColor: state.data.color,
    padding: 5,
    borderRadius: 5,
  }),
  multiValueLabel: (base, state) => ({
    ...base,
    color: "black",
    padding: 5,
  }),
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
`;

const Buttoncontainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
  animation: fadeIn 1s ease-in-out;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  animation: fadeIn 1s ease-in-out;
  text-align: center;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
`;

function Devis() {
  const [typeStructure, setTypeStructure] = useState("");
  const [name, setName] = useState("");
  const [func, setFunc] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [languages, setLanguages] = useState([]);
  const [sourceLanguage, setSourceLanguage] = useState(null);
  const [serviceDate, setServiceDate] = useState("");
  const [interpretationType, setInterpretationType] = useState("");
  const [link, setLink] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [targetLanguage, setTargetLanguage] = useState(null);
  const [isReCaptcha, setIsReCaptcha] = useState(null);
  const navigate = useNavigate();

  const handleAddLanguage = () => {
    if (
      targetLanguage &&
      sourceLanguage &&
      serviceDate &&
      (link || serviceType)
    ) {
      const formattedDate = new Date(serviceDate).toISOString();
      const languagesCopy = [...languages];
      languagesCopy.push({
        sourceLanguage: sourceLanguage.value,
        targetLanguage: targetLanguage.value,
        date: formattedDate,
        redirectionLink: link,
        typeService: serviceType,
      });

      setLanguages(languagesCopy);
      setTargetLanguage(null);
      setSourceLanguage(null);
      setServiceDate("");
      setLink("");
      setServiceType("");
      setInterpretationType("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      typeStructure,
      name,
      function: func,
      email,
      phone,
      postalAddress,
      prestations: languages,
    };

    try {
      if (isReCaptcha) {
        const response = await axios.post(
          `${API_URL}/form/translation`,
          payload
        );

        toast.success(response.data.data, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setTimeout(() => {
          navigate("/");
        }, 3500);
      } else {
        toast.error("Please verify captcha first !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error(
        "Erreur ! Impossible de soumettre le formulaire pour le moment.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }
  };

  return (
    <div
      className="App"
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f0f0",
        padding: "",
        margin: "0 auto",
      }}
    >
      <Container>
        <img src="images/logo.png" alt="Logo" className="logo" />
        <Title>DEMANDE DE DEVIS GRATUIT</Title>
        <Paragraph className="text-center">
          Vous avez un support écrit ou audiovisuel à traduire, transcrire ou
          sous-titrer ?<br />
          Nous mettrons à votre disposition nos traducteurs professionnels pour
          traduire le plus fidèlement possible.
        </Paragraph>
        <section className="contact">
          <Subtitle>ET SI ON FAISAIT CONNAISSANCE ?</Subtitle>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label-styling" htmlFor="youAre">
                VOUS ÊTES : <span className="required">*</span>
              </label>
              <select
                id="youAre"
                className="input-style"
                value={typeStructure}
                onChange={(e) => setTypeStructure(e.target.value)}
              >
                <option value="association">Une Association</option>
                <option value="publicService">Un Service publique</option>
                <option value="privateCompany">Une Entreprise privée</option>
                <option value="individual">Un Particulier</option>
              </select>
            </div>
            <div className="form-group">
              <label className="label-styling" htmlFor="structureName">
                NOM DE VOTRE STRUCTURE : <span className="required">*</span>
              </label>
              <input
                type="text"
                id="structureName"
                placeholder="Nom de votre structure"
                className="input-style"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="label-styling" htmlFor="function">
                FONCTION :
              </label>
              <input
                type="text"
                id="function"
                placeholder="Fonction"
                className="input-style"
                value={func}
                onChange={(e) => setFunc(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="label-styling" htmlFor="email">
                E-MAIL :
              </label>
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                className="input-style"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="label-styling" htmlFor="phoneNumber">
                TÉLÉPHONE :
              </label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Numéro de téléphone"
                className="input-style"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="label-styling" htmlFor="postalAddress">
                ADRESSE POSTALE :
              </label>
              <input
                type="text"
                id="postalAddress"
                placeholder="Adresse postale"
                className="input-style"
                value={postalAddress}
                onChange={(e) => setPostalAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="label-styling" htmlFor="serviceType">
                TYPE DE SERVICE :
              </label>
              <select
                id="serviceType"
                className="input-style"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
              >
                <option value="">Sélectionner le type de service</option>
                <option value="traduction">Traduction de support</option>
                <option value="sous-titrage">Sous-titrage de support</option>
                <option value="transcription">Transcription de support</option>
                <option value="voix-off">Réalisation de voix-off</option>
              </select>
            </div>
            <div className="form-group">
              <label className="label-styling" htmlFor="link">
                ou COPIEZ ET COLLEZ LE LIEN DE REDIRECTION VERS CELUI-CI :
              </label>
              <input
                type="text"
                id="link"
                placeholder="Lien de redirection"
                className="input-style"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="label-styling" htmlFor="sourceLanguage">
                LANGUE SOURCE DU SUPPORT : <span className="required">*</span>
              </label>
              <Select
                id="sourceLanguage"
                options={sortedLanguageOptions}
                styles={customStyles}
                placeholder="Sélectionner une langue"
                value={sourceLanguage}
                onChange={setSourceLanguage}
              />
            </div>
            <div className="form-group">
              <label className="label-styling" htmlFor="targetLanguage">
                LANGUE CIBLE : <span className="required">*</span>
              </label>
              <Select
                id="targetLanguage"
                options={sortedLanguageOptions}
                styles={customStyles}
                placeholder="Sélectionner une langue"
                value={targetLanguage}
                onChange={setTargetLanguage}
              />
            </div>
            <div className="form-group">
              <label className="label-styling" htmlFor="serviceDate">
                DATE DE LA LIVRAISON SOUHAITÉE :
              </label>
              <input
                type="date"
                id="serviceDate"
                className="input-style"
                value={serviceDate}
                onChange={(e) => setServiceDate(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={handleAddLanguage}
              className="add-language-button"
            >
              Ajouter
            </button>
            <div className="tw-overflow-x-scroll md:tw-overflow-auto">
              <div className="">
                <label className="label-styling">
                  RÉCAPITULATIF DE DEMANDE(S) :
                </label>
                <div className="reservation-summary">
                  <div
                    className="table-responsive mt-3"
                    style={{ marginBottom: "20px" }}
                  >
                    <table className="table table-borderless table-hover">
                      <thead>
                        <tr>
                          <th>Langue Source</th>
                          <th>Langue Cible</th>
                          <th>Date</th>
                          <th>Redirection Link</th>
                          <th>Type de Service</th>
                        </tr>
                      </thead>
                      <tbody>
                        {languages.map((language, index) => (
                          <tr key={index}>
                            <td>{language.sourceLanguage}</td>
                            <td>{language.targetLanguage}</td>
                            <td>
                              {new Date(language.date).toLocaleDateString()}
                            </td>
                            <td>
                              <a href={language.redirectionLink}>Link</a>
                            </td>
                            <td>{language.typeService}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <GoogleCaptchaVerification
              captchaVerificationDone={setIsReCaptcha}
              alignment="start"
            />
            <button type="submit" className="submit-button">
              Envoyer
            </button>
          </form>
        </section>
        <section className="mt-5">
          <div className="ms-5 icon reseaux">
            <a href="https://www.facebook.com/afrilangues/?locale=fr_FR">
              <img
                src="images/facebook-logo.png"
                alt=""
                className="custom-logo"
              />
            </a>
            <a href="https://www.instagram.com/afrilangues/">
              <img
                src="images/instagram-logo.png"
                alt=""
                className="custom-logo"
              />
            </a>
            <a href="https://fr.linkedin.com/company/afrilangues">
              <img
                src="images/linkedin-logo.png"
                alt=""
                className="custom-logo"
              />
            </a>
            <a href="https://x.com/afrilangues">
              <img
                src="images/twitter-logo.png"
                alt=""
                className="custom-logo-x"
              />
            </a>
            <a href="https://www.youtube.com/channel/UCeB4UPA38S2hscm54e9gvhg">
              <img
                src="images/youtube-logo.png"
                alt=""
                className="custom-logo"
              />
            </a>
          </div>
          <div className="px-5">
            <hr />
          </div>
          <div className="text-center">
            <img
              src="images/logo-afrilangues-sans-fond.png"
              alt=""
              className="custom-logo-afrilangues"
            />
            <p className="custom-ft-size">
              AFRILANGES SAS - 3 Avenur Victoria, 75004 Paris | Tél: 06 58 48 53
              13 | contact@afrilangues.fr | www.afrilangues.com
              <br /> SIRET : 883 723 397 00013
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Devis;
