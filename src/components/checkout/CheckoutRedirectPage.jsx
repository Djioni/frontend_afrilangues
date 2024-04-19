/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutRedirectPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        window.location.href = "/dashboard";
      }
    }, 1000);

    // Return undefined from useEffect
    return () => {
      clearTimeout(timeout);
    };
  }, [countdown, navigate]);

  return (
    <div className="" style={{ paddingTop: "50px" }}>
      <h2 className="text-center">Le paiement a été effectué avec succès</h2>
      {/* Replace `class` with `className` */}
      <p className="d-block text-center" style={{ fontWeight: "300" }}>
        Redirection vers le tableau de bord en {countdown} seconde...
      </p>
    </div>
  );
};

export default CheckoutRedirectPage;
