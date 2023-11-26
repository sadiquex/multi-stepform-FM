import React from "react";
import { ThankyouIcon } from "./shared/Assets";

const ThankYouPage = () => {
  return (
    <div className="text-black flex items-center justify-center w-[80%] flex-col gap-2 py-6">
      <ThankyouIcon />
      <h2 className="text-marineBlue font-ubuntuBold text-[28px]">
        Thank you!
      </h2>
      <p className="text-coolGray text-center">
        Thank you for confirming your subscription! We hope you have fun using
        our platform. If you ever need support, please feel free to email us at{" "}
        <a href="mailto:abubakasaddik1@gmail.com">Ibrahim Saddik</a>
      </p>
    </div>
  );
};

export default ThankYouPage;
