import { useEffect, useState } from "react";
import { API_URL } from "../../api";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const GoogleCaptchaVerification = ({ captchaVerificationDone, alignment }) => {
  const [isReCaptcha, setIsReCaptcha] = useState(null);
  const [siteKey, setSiteKey] = useState(null);
  const alignmentClass =
    alignment == "center"
      ? "tw-flex tw-justify-center w-100 mt-3 mb-4"
      : "tw-flex tw-justify-left w-100 mt-3 mb-4";

  // Fetch the site key from the backend on component mount
  useEffect(() => {
    const fetchSiteKey = async () => {
      try {
        const response = await axios.get(`${API_URL}/captcha/site-key`);
        setSiteKey(response.data.siteKey);
      } catch (error) {
        console.error("Error fetching captcha site key:", error);
      }
    };
    fetchSiteKey();
  }, []);

  const submitCaptchaToken = (tokenString) => {
    try {
      axios
        .post(
          `${API_URL}/captcha/submit`,
          { recaptchaToken: tokenString },
          null
        )
        .then((result) => {})
        .catch((err) => {
          console.log("Error : ", err);
        });
    } catch (x) {
      console.log(x);
    }
  };

  // Don't render the captcha until we have the site key
  if (!siteKey) {
    return <div className={alignmentClass}>Loading captcha...</div>;
  }

  return (
    <div className={alignmentClass}>
      <ReCAPTCHA
        onChange={(value) => {
          submitCaptchaToken(value);
          captchaVerificationDone(value);
        }}
        sitekey={siteKey}
      />
    </div>
  );
};

export default GoogleCaptchaVerification;
