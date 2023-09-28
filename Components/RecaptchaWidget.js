// components/RecaptchaWidget.js

import { useEffect } from "react";
import { useRecaptcha } from "next_recaptcha";
// import { useRecaptcha } from "next_recaptcha__WEBPACK_IMPORTED_MODULE_2__";

const RecaptchaWidget = () => {
  const { executeRecaptcha } = useRecaptcha();

  useEffect(() => {
    if (executeRecaptcha) {
      executeRecaptcha();
    }
  }, [executeRecaptcha]);

  return (
    <div
      className="g-recaptcha"
      data-sitekey="6LdUeFgoAAAAADCltMnIi6kG2P5m4wu-1f_P9_jU"
    ></div>
  );
};

export default RecaptchaWidget;
