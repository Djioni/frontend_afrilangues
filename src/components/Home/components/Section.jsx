    import React, { useRef } from 'react';
    import Gallery from './Gallery';
    import Stats from './Stats';
    import {Link} from 'react-router-dom';


    const MyComponent = () => {
        // Créez une référence pour l'élément Gallery
        const galleryRef = useRef(null);

        // Fonction de gestion du clic pour faire défiler jusqu'à Gallery
        const handleScrollToGallery = () => {
            galleryRef.current.scrollIntoView({ behavior: 'smooth' });
        };

        return (
            <div className="drop-element" data-tpl="template6" data-title="Template 6">
                <header className="position-fixed w-100"></header>

                <section className="custom-mb-16 mb-md-0 first-div mt-5">
                    <div className="custom-max-w-screen-xl px-4 mx-auto pb-lg-0">
                        <div className="row custom-max-w-screen-xl px-4 pt-20 mx-auto custom-lg-gap-8 xl-gap-0 py-lg-0 d-flex">
                            <div className=" me-auto ms-auto col-lg-7 text-start">
                                <div className="custom-mb-5">
                                    <p className="fw-bold text-gray-500 taille-text mt-4">
                                        Services linguistiques et technologiques
                                    </p>
                                </div>
                                <div className="custom-mb-5">
                                    <h1 className="fw-extrabold leading-none tracking-tight tg-taille">
                                        Solutions linguistiques autour des langues africaines !
                                    </h1>
                                </div>
                                <div className="mb-4">
                                    <p className="fw-light text-gray-500 taille-text">
                                        Pour favoriser l'intercompréhension, l'apprentissage de langues africaines partout et à tout moment
                                    </p>
                                </div>
                                <div className=" d-sm-flex justify-center justify-content-lg-start">
                                    <button
                                        onClick={handleScrollToGallery}
                                        className="my-1 d-inline-flex align-items-center mx-sm-3 justify-content-center w-100 px-5 py-3 text-sm fw-medium text-center text-gray-900 bg-white custom-border rounded-lg w-sm-auto"
                                    >
                                        <img src="images/fusee.png" className="custom-icon" alt="Fusee" />
                                        DÉCOUVREZ NOS SERVICES
                                    </button>
                                    <a
                                        href="https://shop.afrilangues.fr/shop" target="_blank"
                                        className="my-1 text-decoration-none d-inline-flex text-center align-items-center justify-content-center w-100 px-5 py-3 text-sm fw-medium text-gray-900 bg-white custom-border  rounded-lg w-sm-auto"
                                    >
                                        <img src="images/boutiqueicon.png" className="custom-icon" alt="boutique" />
                                        VISITEZ NOTRE BOUTIQUE
                                    </a>
                                </div>
                            </div>
                            <div className="d-none mt-lg-0 col-lg-5 d-lg-flex">
                                <img src="images/mockup.png" alt="mockup" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </section>

                <Stats/>
                <Gallery ref={galleryRef} />
                

                <style>
                    {`
                        @media (max-width: 1024px) {
                            .first-div {
                                margin-bottom: 35px; /* Ajustez la valeur selon vos besoins */
                            }
                        }
                    `}
                </style>
            </div>

        );
    };

    export default MyComponent;
