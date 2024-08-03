import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  background-image: url("images/women.png");
  background-size: cover; /* Assure que l'image couvre toute la zone, tout en conservant son aspect */
  background-repeat: no-repeat; /* Empêche la répétition de l'image */
  background-position: center; /* Centre l'image */
  min-height: 60vh; /* Augmente la hauteur de l'image */
  margin: 30px ; /* Réduit la marge haute et basse */
  margin-bottom: 0px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1279px) {
    padding: 10px; /* Réduit le padding */
    justify-content: flex-start;
    min-height: 80vh; /* Hauteur de l'image pour les écrans moyens */
  }

  @media (max-width: 1024px) {
    min-height: 70vh;
    background-size: 140%;
    margin-bottom : -200px;
    margin-top: -110px;
  }

  @media (max-width: 768px) {
    padding: 10px; /* Réduit le padding */
    justify-content: flex-start;
    min-height: 70vh; /* Hauteur de l'image pour les petits écrans */
    margin-bottom : -180px;
  }

  @media (max-width: 739px) {
    min-height: 90vh; /* Augmente la hauteur de l'image pour les très petits écrans */
  }

  @media (max-width: 639px) {
    min-height: 60vh;
    background-size: 200%;
    margin-bottom : -150px;
  }
`;

const Column = styled.div`
  color: white;
  text-align: left;
  padding: 10px; /* Réduit le padding */
  padding-left: 50px; /* Réduit le padding gauche */
  width: 100%;
  

  @media (max-width: 1279px) {
    padding-left: 25px; /* Réduit davantage le padding gauche pour les écrans moyens */
    text-align: left;
  }

  @media (max-width: 768px) {
    padding-left: 10px; /* Réduit encore le padding gauche pour les petits écrans */
    text-align: left;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 3.5em;
  animation: fadeInBottom 0.5s ease-out;

  @media (max-width: 1279px) {
    font-size: 2.5em;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 739px){
    font-size: 1.75rem;
  }

  @media (max-width: 639px){
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.8em;
  opacity: 0.8;
  animation: fadeInBottom 0.5s ease-out;
  font-weight: normal;

  @media (max-width: 1279px) {
    font-size: 1.5em;
  }

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 739px){
    font-size: 1rem;
  }

  @media (max-width: 639px){
    font-size: 0.75rem;
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 15px 30px;
  margin-top: 24px;
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 9999px;
  &:hover {
    background-color: #555;
  }

  @media (max-width: 1279px) {
    padding: 12px 24px;
    font-size: 1.1em;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 1em;
  margin-top: 10px;
  }
  
  @media (max-width: 639px) {
    padding: 5px 15px;
    font-size: 0.5em;
  margin-top: 5px;
  }

`;

const SectionAlin = () => {
  return (
    <Container>
      <Column>
        <Subtitle>AFRILANGUES X SPEEDPRESTA</Subtitle>
        <Title>ALIN PROJECT</Title>
        <Subtitle>Innover avec les langues africaines</Subtitle>
        <Button>Découvrir</Button>
      </Column>
    </Container>
  );
};

export default SectionAlin;
