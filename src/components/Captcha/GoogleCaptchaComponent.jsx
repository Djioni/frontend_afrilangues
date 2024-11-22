import { useEffect, useState } from "react";
import {
  API_URL,
  GOOGLE_CAPTCHA_SECRET,
  GOOGLE_CAPTCHA_SITE_KEY,
  GOOGLE_CAPTCHA_SITE_LINK,
} from "../../api";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const GoogleCaptchaVerification = ({ captchaVerificationDone, alignment }) => {
  const [isReCaptcha, setIsReCaptcha] = useState(null);
  const alignmentClass =
    alignment == "center"
      ? "tw-flex tw-justify-center w-100 mt-3 mb-4"
      : "tw-flex tw-justify-left w-100 mt-3 mb-4";

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

  return (
    <div className={alignmentClass}>
      <ReCAPTCHA
        onChange={(value) => {
          submitCaptchaToken(value);
          axios
            .post(GOOGLE_CAPTCHA_SITE_LINK, {
              secret: GOOGLE_CAPTCHA_SECRET,
              responses: value,
            })
            .then((result) => {});
          captchaVerificationDone(value);
        }}
        sitekey={GOOGLE_CAPTCHA_SITE_KEY}
      />
    </div>
  );
};

export default GoogleCaptchaVerification;
