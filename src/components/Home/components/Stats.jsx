import React from "react";
import CountUp from "react-countup";

const Statistics = () => {
  const stats = [
    {
      icon: "/images/langues.png",
      end: 60,
      title: "Langues africaines pour l'interprétariat et la traduction",
    },
    {
      icon: "/images/cours.png",
      end: 20000,
      title: "Apprenants pour nos cours par visio et auto-apprentissage",
    },
    {
      icon: "/images/lecons.png",
      end: 500,
      title: "Leçons sur notre site internet et application mobile",
    },
    {
      icon: "/images/audio.png",
      end: 500,
      title: "Leçons ludiques avec supports multimédias interactifs",
    },
    {
      icon: "/images/livres.png",
      end: 20,
      title: "Livres publiés pour les enfants et les adultes",
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font first-section">
        <div className="container-fluid px-3 px-custom py-4 mx-auto ">
          <div className="row text-center ms-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`col-12 col-md-4 col-lg-2 mb-8 me-2 ${
                  index === stats.length - 1 ? "last-stat" : ""
                }`}
              >
                <div className="d-flex justify-content-center">
                  {" "}
                  <img
                    src={stat.icon}
                    alt="Icon"
                    className="mx-auto mb-1"
                    style={{ width: "3rem", height: "3rem" }}
                  />{" "}
                </div>
                <div className="d-flex justify-content-center">
                  <h2 className="title-font fw-medium text-3xl-custom text-xl-custom text-gray-900">
                    +<CountUp end={stat.end} duration={3} />
                  </h2>
                </div>
                <p className="px-1 leading-relaxed text-base tw-font-[400] text-xl-custom">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>
          {`
            @media (max-width: 1023px) {
              .last-stat {
                grid-column: span 2 / span 2;
                justify-self: center;
              }
            }
            @media (max-width: 430px) {
              .first-section {
                padding-bottom: 0;
              }
              .first-section .container {
                padding-bottom: 0;
                margin-bottom: 0;
              }
              .first-section .w-full {
                margin-bottom: 0;
              }
            }
          `}
        </style>
      </section>
    </>
  );
};

export default Statistics;
