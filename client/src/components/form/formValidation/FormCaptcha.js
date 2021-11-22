import React, { useState, useEffect, createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import dotenv from "dotenv";
dotenv.config({ path: "/client/config.env" });

export default function FormCaptcha({ setVerified }) {
  const [load, setLoading] = useState(false);
  //   process.env doesnt work as it showed undefined =(
  const key = "6LfefU0dAAAAAGc_x-MrFXBSbeTgA_modJtpgP1C";
  const reCaptchaRef = createRef();

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
    // console.log("reCaptcha Ref-", reCaptchaRef);
  });

  return (
    <div style={{ marginTop: "10px" }}>
      {load && key && (
        <ReCAPTCHA
          theme='light'
          ref={reCaptchaRef}
          onChange={() => setVerified(true)}
          sitekey={key}
        />
      )}
    </div>
  );
}
