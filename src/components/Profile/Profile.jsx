import { Routes, Route } from "react-router-dom";
import Compte from "./Components/Compte";
import MonProfil from "./Components/MonProfil";
import EditMonProfil from "./Components/EditMonProfil";
import Propos from "./Components/Propos.jsx";
import "./Profile.css";
function Profile() {
  return (
    <div
      className="w-100 h-100 d-flex flex-column justify-content-center  align-items-center rounded-4 "
      style={{ minHeight: "100vh", background: "#F6F6F6" }}
    >
      <Compte />
      {/* <Routes>
        <Route exact path="/" element={<Compte />} />
        <Route path="/monProfil" element={<MonProfil />} />
        <Route path="/editMonProfil" element={<EditMonProfil />} />
        <Route path="/propos" element={<Propos />} />
      </Routes> */}
    </div>
  );
}

export default Profile;
