import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./devis.css";
import styled from "styled-components";

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
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [interpretationType, setInterpretationType] = useState("");
  const [link, setLink] = useState("");
  const [serviceType, setServiceType] = useState("");

  const handleAddLanguage = () => {
    if (
      selectedLanguage &&
      sourceLanguage &&
      serviceDate &&
      (link || serviceType)
    ) {
      const formattedDate = new Date(serviceDate).toLocaleDateString("fr-FR");
      setLanguages([
        ...languages,
        {
          sourceLanguage,
          language: selectedLanguage.label,
          date: formattedDate,
          link,
          serviceType,
        },
      ]);
      setSelectedLanguage(null);
      setSourceLanguage("");
      setServiceDate("");
      setLink("");
      setServiceType("");
      setInterpretationType("");
    }
  };

  return (
    <div
      className="App"
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f0f0",
        padding: "20px",
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
          <form>
            <div className="form-group">
              <label htmlFor="youAre">
                VOUS ÊTES : <span className="required">*</span>
              </label>
              <select id="youAre" className="input-style">
                <option value="association">Une Association</option>
                <option value="publicService">Un Service publique</option>
                <option value="privateCompany">Une Entreprise privée</option>
                <option value="individual">Un Particulier</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="structureName">
                NOM DE VOTRE STRUCTURE : <span className="required">*</span>
              </label>
              <input
                type="text"
                id="structureName"
                placeholder="Nom de votre structure"
                className="input-style"
              />
            </div>
            <div className="form-group">
              <label htmlFor="function">FONCTION :</label>
              <input
                type="text"
                id="function"
                placeholder="Fonction"
                className="input-style"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-MAIL :</label>
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                className="input-style"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">TÉLÉPHONE :</label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Numéro de téléphone"
                className="input-style"
              />
            </div>
            <div className="form-group">
              <label htmlFor="postalAddress">ADRESSE POSTALE :</label>
              <input
                type="text"
                id="postalAddress"
                placeholder="Adresse postale"
                className="input-style"
              />
            </div>
            <div className="form-group">
              <label htmlFor="serviceType">TYPE DE SERVICE :</label>
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
            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label htmlFor="fileUpload">DÉPOSEZ VOTRE SUPPORT :</label>
              <input type="file" id="fileUpload" className="input-style" />
            </div>
            <div className="form-group">
              <label htmlFor="link">
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
              <label htmlFor="sourceLanguage">
                LANGUE SOURCE DU SUPPORT : <span className="required">*</span>
              </label>
              <Select
                id="language"
                options={sortedLanguageOptions}
                styles={customStyles}
                placeholder="Sélectionner une langue"
                value={selectedLanguage}
                onChange={setSelectedLanguage}
              />
            </div>
            <div className="form-group">
              <label htmlFor="language">
                LANGUE CIBLE : <span className="required">*</span>
              </label>
              <Select
                id="language"
                options={sortedLanguageOptions}
                styles={customStyles}
                placeholder="Sélectionner une langue"
                value={selectedLanguage}
                onChange={setSelectedLanguage}
              />
            </div>
            <div className="form-group">
              <label htmlFor="serviceDate">
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
            <div className="form-group">
              <label>RÉCAPITULATIF DE DEMANDE(S) :</label>
              <div className="reservation-summary">
                <div className="summary-header">
                  <span className="column-header">LANGUE SOURCE</span>
                  <span className="column-header">LANGUE CIBLE</span>
                  <span className="column-header">DATE</span>
                  <span className="column-header">LIEN</span>
                  <span className="column-header">TYPE DE SERVICE</span>
                </div>
                {languages.map((lang, index) => (
                  <div key={index} className="selected-language">
                    <span className="column">{lang.sourceLanguage}</span>
                    <span className="column">{lang.language}</span>
                    <span className="column">{lang.date}</span>
                    <span className="column">{lang.link}</span>
                    <span className="column">
                      {lang.serviceType === "traduction"
                        ? "Traduction de support"
                        : lang.serviceType === "sous-titrage"
                        ? "Sous-titrage de support"
                        : lang.serviceType === "transcription"
                        ? "Transcription de support"
                        : "Réalisation de voix-off"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">MESSAGE :</label>
              <textarea
                id="message"
                placeholder="Écrivez votre message"
                className="input-style"
              ></textarea>
            </div>
            <Buttoncontainer>
              <button type="submit" className="submit-button">
                ENVOYER
              </button>
            </Buttoncontainer>
          </form>
        </section>
      </Container>
    </div>
  );
}

export default Devis;
