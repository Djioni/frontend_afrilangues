import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const Gallery = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="drop-element w-100"
      data-tpl="gallery3"
      data-title="GALLERY 3"
    >
      <section
        id="services"
        className="text-gray-600 body-font w-100"
        style={{ backgroundColor: "rgba(249,250,251,var(--tw-bg-opacity))" }}
      >
        <div className="container-flex px-custom w-100 ">
          <div className="d-flex flex-column text-center w-100 custom-mb-20">
            <div className="d-flex flex-wrap justify-content-center">
              {[
                "formation.png",
                "interpretariat.png",
                "traduction.png",
                "boutique.png",
              ].map((src, index) => (
                <div
                  className="p-2"
                  style={{ width: "616px", height: "616px" }}
                  key={index}
                >
                  <div className="position-relative d-flex align-items-center justify-content-center h-100 w-100">
                    <img
                      alt="gallery"
                      className="position-absolute custom-inset-0 w-100 h-100 object-cover object-center"
                      src={`images/${src}`}
                    />
                    <div className="custom-py-10 position-relative z-index-10 w-100 h-100 custom-bg-opacity-60 d-flex flex-column align-items-center justify-content-center text-center">
                      <h2 className="tracking-widest taille-titre title-font fw-bold text-white custom-mb-3 text-uppercase shadow-lg">
                        {src.split(".")[0].toUpperCase()}
                      </h2>
                      <h1 className="title-font tw-font-[400] taille-ss-titre  fw-medium  text-white custom-mb-5 mx-4 shadow-md">
                        {index === 0
                          ? "Vous êtes à la recherche de cours de langues africaines ?"
                          : index === 1
                          ? "Vous êtes à la recherche d'un interprète dans une langue africaine ?"
                          : index === 2
                          ? "Vous êtes à la recherche d'un traducteur dans une langue africaine ?"
                          : "Achetez un manuel, un jeu sur les langues et cultures d'Arique"}
                      </h1>
                      {index === 0 || index === 3 ? (
                        <a
                          href={
                            index === 0
                              ? "/formation"
                              : "https://shop.afrilangues.fr"
                          }
                          target="_blank"
                          className="text-decoration-none text-black bg-white border-0 py-custom custom-px-6 rounded"
                        >
                          {index === 0
                            ? "EN SAVOIR PLUS"
                            : "VISITEZ LA BOUTIQUE"}
                        </a>
                      ) : index === 1 ? (
                        <Link
                          to="/resa"
                          className=" text-decoration-none text-black bg-white border-0 py-custom custom-px-6 rounded"
                        >
                          PRENDRE UN RENDEZ-VOUS
                        </Link>
                      ) : (
                        <Link
                          to="/devis"
                          className="text-decoration-none text-black bg-white border-0 py-custom custom-px-6 rounded"
                        >
                          DEMANDER UN DEVIS
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @media (max-width: 1024px) {
          .flex-wrap {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          .p-2 {
            width: 100% !important;
            height: 30vh !important;
          }
          h2,
          h1,
          a,
          button {
            font-size: 20px !important;
          }
        }
        @media (max-width: 665px) {
          .p-2 {
            width: 50vh !important;
            height: 40vh !important;
          }
          .title-font {
            font-size: 17px !important;
          }
          h2 {
            font-size: 1.75rem !important;
          }
          button,
          a {
            padding: 0.5rem 1rem !important;
          }
        }
      `}</style>
    </div>
  );
});

export default Gallery;
