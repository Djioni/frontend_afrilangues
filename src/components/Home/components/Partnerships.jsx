import React from "react";
import styled, { keyframes } from "styled-components";

const logos = [
  { src: "images/ch.png", alt: "CH Logo" },
  { src: "images/fr.png", alt: "FR Logo" },
  { src: "images/africavivre.png", alt: "Africa Vivre Logo" },
  { src: "images/imaf.png", alt: "IMAF Logo" },
  { src: "images/lespep28.png", alt: "Les PEP 28 Logo" },
  { src: "images/mjrf.png", alt: "MJFR Logo" },
];

const duplicatedLogos = Array(10).fill(logos).flat();

const marquee = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const MarqueeContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-top: 3rem;
  padding-bottom: 3.5rem;

  @media (max-width: 376px) {
    padding-top: 5.5rem;
  }
`;

const MarqueeContent = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${marquee} 22s linear infinite;
  width: 200%; /* Double la largeur pour accueillir le contenu dupliqué */
`;

const Image = styled.img`
  height: 5rem;
  margin: 0 auto;
`;

const Partnerships = () => {
  return (
    <MarqueeContainer>
      <MarqueeContent>
        {duplicatedLogos.map((logo, index) => (
          <Image key={index} src={logo.src} alt={logo.alt} />
        ))}
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default Partnerships;
