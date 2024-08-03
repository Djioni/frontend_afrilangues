/** @format */

// This example shows you how to set up React Stripe.js and use Elements.
// Learn how to accept a payment using the official Stripe docs.
// https://stripe.com/docs/payments/accept-a-payment#web

import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  Elements,
  useElements,
  useStripe,
  AddressElement,
} from "@stripe/react-stripe-js";

// import { logEvent, Result, ErrorResult } from "./util";
import "./styles/common.css";
import axios from "axios";
import { API_URL, AUTH_NAME } from "../../api";
import Cookies from "js-cookie";
import CheckoutRedirectPage from "./CheckoutRedirectPage";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#424770",
      letterSpacing: "0.025em",
      "::placeholder": {
        color: "#aab7c4",
        fontSize: "13px",
        fontWeight: "300",
      },
    },
    invalid: {
      color: "#9e2146",
      border: "red",
    },
  },
  showIcon: true,
};

const ADDRESS_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#424770",
      letterSpacing: "0.025em",
      "::placeholder": {
        color: "#aab7c4",
        fontSize: "13px",
        fontWeight: "300",
      },
    },
    invalid: {
      color: "#9e2146",
      border: "red",
    },
  },
  showIcon: true,
  mode: "shipping",
};
const logEvent = (name) => (event) => {
  console.log(`[${name}]`, event);
};
const Result = ({ children }) => <div className="result">{children}</div>;
const ErrorResult = ({ children }) => <div className="error">{children}</div>;
const CheckoutForm = ({ handleCheckData }) => {
  const [iscupon, setIsCupon] = useState(false);
  const navigate = useNavigate();
  const [btnText, setBtnText] = useState("Payer");
  const [paymentStatus, setPaymentStatus] = useState(false);
  const userToken = Cookies.get("token");
  const userID = Cookies.get("id");

  const elements = useElements();
  const stripe = useStripe();
  const [name, setName] = useState("");
  const [postal, setPostal] = useState("");
  const [countryText, setCountryText] = useState("");
  const [cuponText, setCuponText] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardNumberElement);

    if (card == null) {
      return;
    }

    const { error, token } = await stripe.createToken(card);

    if (error) {
      console.log("[error]", error);
      setErrorMessage(message);
      setPaymentMethod(null);
    } else {
      // console.log("[PaymentMethod]", payload.paymentMethod);
      // setPaymentMethod(payload.paymentMethod);
      setErrorMessage(null);

      // API REQUEST

      if (userToken && userID && token) {
        setBtnText("Traitement...");
        const tokenf = JSON.parse(userToken);
        console.log(JSON.parse(userToken));
        const user = JSON.parse(userID);
        console.log("token", token);
        axios
          .post(
            `${API_URL}/subscription/`,
            // Data to send in the request body, if any
            {
              token: token?.id,
              coupon: "",
              title: "",
              description: "f",
              paymentMethod: "CB",
              userId: user,
              duration: "12",
            },
            {
              headers: {
                Authorization: `Bearer ${tokenf}`,
                "Content-Type": "application/json", // Adjust content type as per your API requirements
              },
            }
          )
          .then((response) => {
            // Handle success
            console.log("Response:", response.data);
            handleCheckData(true);
          })
          .catch((error) => {
            // Handle error
            console.error("Error:", error.response.status);
            setBtnText("Pay");
            if ((error.response.status = 401)) {
              Cookies.set("token", "");
              console.log("auth fail");
              sessionStorage.setItem("current_url_path", "/checkout");
              window.location.href = "/auth/login";
              localStorage.clear();
            }
          });
      } else {
        console.log("login needed");
        sessionStorage.setItem("current_url_path", "/checkout");
        window.location.href = "/auth/login";
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nom et prénom</label>
      <input
        id="name"
        required
        placeholder="Idrissa Konté"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="cardNumber">Numéro de carte</label>
      <CardNumberElement
        id="cardNumber"
        onBlur={logEvent("blur")}
        onChange={logEvent("change")}
        onFocus={logEvent("focus")}
        onReady={logEvent("ready")}
        options={ELEMENT_OPTIONS}
      />
      <label htmlFor="expiry">Date d'expiration de la carte</label>
      <CardExpiryElement
        id="expiry"
        onBlur={logEvent("blur")}
        onChange={logEvent("change")}
        onFocus={logEvent("focus")}
        onReady={logEvent("ready")}
        options={ELEMENT_OPTIONS}
      />
      <label htmlFor="cvc">CVC</label>
      <CardCvcElement
        id="cvc"
        onBlur={logEvent("blur")}
        onChange={logEvent("change")}
        onFocus={logEvent("focus")}
        onReady={logEvent("ready")}
        options={ELEMENT_OPTIONS}
      />

      <label htmlFor="postal">Pays</label>
      <input
        id="country"
        required
        placeholder="France"
        value={countryText}
        onChange={(e) => {
          setCountryText(e.target.value);
        }}
      />
      <label htmlFor="postal">Code Postal</label>
      <input
        id="postal"
        required
        placeholder="75001"
        value={postal}
        onChange={(e) => {
          setPostal(e.target.value);
        }}
      />

      {iscupon === false && (
        <small
          onClick={() => {
            setIsCupon(true);
          }}
          style={{
            color: "#666ee8",
            fontWeight: "300",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Vous avez un code promo ?
        </small>
      )}
      {iscupon && (
        <div>
          <label htmlFor="postal">Code promo</label>
          <input
            id="Cupon Code (optional)"
            required
            placeholder="Code Cupon (facultatif)"
            value={cuponText}
            onChange={(e) => {
              setCuponText(e.target.value);
            }}
          />
        </div>
      )}
      {errorMessage && <ErrorResult>{errorMessage}</ErrorResult>}
      {paymentMethod && <Result>Got PaymentMethod: {paymentMethod.id}</Result>}
      <button type="submit" disabled={!stripe}>
        {btnText}
      </button>
    </form>
  );
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51GuF7qHRPdZRapkqmQUSnDJbDD28lxjlJA1L6bjvqF186Nbf2vp7lte5O1qL0IhXnuAewATkULXveg9m0dqL7uql00kRdGiTWQ"
);

const CheckoutPage = () => {
  const [status, setStatus] = useState(false);
  const [checkout, setCheckout] = useState(true);
  const [loading, setLoading] = useState(true);
  const userToken = Cookies.get("token");
  const userID = Cookies.get("id");
  useEffect(() => {
    if (userToken && userID) {
      setLoading(false);
    } else {
      sessionStorage.setItem("current_url_path", "/checkout");
      window.location.href = "/auth/login";
    }
  }, []);
  const handleCheckData = (value) => {
    console.log(value);

    if (value) {
      setStatus(value);
      setCheckout(false);
    }
  };

  if (status && checkout === false) {
    return <CheckoutRedirectPage />;
  }
  if (checkout) {
    return (
      <div id="checkout">
        {loading ? (
          <Loading
            full={true}
            page={true}
            message={"S'il vous plaît, attendez!"}
          />
        ) : (
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm handleCheckData={handleCheckData} />
            </Elements>
          </div>
        )}
      </div>
    );
  }
};

export default CheckoutPage;
