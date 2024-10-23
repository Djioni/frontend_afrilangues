import { useState } from "react";
import {
  API_URL,
  GOOGLE_CAPTCHA_SECRET,
  GOOGLE_CAPTCHA_SITE_KEY,
  GOOGLE_CAPTCHA_SITE_LINK,
} from "../../api";
import ReCAPTCHA from "react-google-recaptcha";

const GoogleCaptchaVerification = ({ captchaVerificationDone, alignment }) => {
  const [isReCaptcha, setIsReCaptcha] = useState(null);

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
    <div className={`tw-flex tw-justify-${alignment} w-100 mt-3 mb-4`}>
      <ReCAPTCHA
        onChange={(value) => {
          submitCaptchaToken(value);
          axios
            .post(GOOGLE_CAPTCHA_SITE_LINK, {
              secret: GOOGLE_CAPTCHA_SECRET,
              responses: value,
            })
            .then((result) => {});
          setIsReCaptcha(value);
          captchaVerificationDone(value)
        }}
        sitekey={GOOGLE_CAPTCHA_SITE_KEY}
      />
    </div>
  );
};

export default GoogleCaptchaVerification;
