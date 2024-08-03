import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 py-custom ">
      <div className="container-fluid px-3 ms-0 ">
        <div className="row text-left ">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 footer_link_box ">
            <p className="text-white fw-semibold mb-3 fs-5">À Propos</p>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Méthode</a></li>
              <li><a href="#" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span  >●</span> Mission</a></li>
              <li><a href="#" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Équipe</a></li>
              <li><a href="#" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Le blog</a></li>
              <li><a href="#" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Recrutement</a></li>
              <li><a href="#" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Assistance</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 footer_link_box">
            <p className="text-white fw-semibold mb-3 fs-5">Apprendre les langues africaines</p>
            <ul className="list-unstyled">
              <li><a target="_blank" href="https://africalangues.com/" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Apprendre le bambara</a></li>
              <li><a target="_blank" href="https://africalangues.com/" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Apprendre le lingala</a></li>
              <li><a target="_blank" href="https://africalangues.com/" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Apprendre le wolof</a></li>
              <li><a target="_blank" href="https://africalangues.com/" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Apprendre le soninké</a></li>
              <li><a target="_blank" href="https://africalangues.com/" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Apprendre le laari</a></li>
              <li><a target="_blank" href="https://africalangues.com/" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Apprendre le duala</a></li>
              <li><a target="_blank" href="https://africalangues.com/" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Apprendre le bassa</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 footer_link_box">
            <p className="text-white fw-semibold mb-3 fs-5">Conditions</p>
            <ul className="list-unstyled">
              <li><Link to="/condition-of-sale" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Conditions de vente</Link></li>
              <li><Link to="/terms-of-use" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Mentions légales</Link></li>
              <li><Link to="/confidentiality" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Confidentialité</Link></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 footer_link_box">
            <p className="text-white fw-semibold mb-3 fs-5">Social</p>
            <ul className="list-unstyled">
              <li><a href="https://www.instagram.com/afrilangues/" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Instagram</a></li>
              <li><a href="https://www.facebook.com/afrilangues" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/afrilangues/?viewAsMember=true" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> LinkedIn</a></li>
              <li><a href="https://www.youtube.com/channel/UCeB4UPA38S2hscm54e9gvhg" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> YouTube</a></li>
              <li><a href="https://twitter.com/afrilangues" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Twitter</a></li>
              <li><a href="https://www.pinterest.fr/afrilangues/" className="text-decoration-none hover-underline mb-2 fs-6" style={{color: 'rgb(156 163 175)'}}><span >●</span> Pinterest</a></li>
            </ul>
          </div>
        </div>
        <p className="text-gray-500 text-center mt-8">
          AFRILANGUES © 2023, Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
