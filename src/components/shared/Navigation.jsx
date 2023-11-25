import React from "react";
import useMultiStepForm from "../hooks/useMultiStepForm";

const Navigation = () => {
  const forms = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  const {
    currentIndex,
    goBackwards,
    goForward,
    goToSection,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm(forms.length);

  return (
    <nav className="">
      <ul className="sm:flex-row flex flex-col gap-10">
        {forms.map((form, i) => {
          return (
            <li
              key={i}
              onClick={() => goToSection(i)}
              className="cursor-pointer flex items-center"
            >
              <span
                className={` ${
                  currentIndex === i ? "bg-pastelBlue text-marineBlue  " : ""
                } rounded-full font-ubuntuBold h-[32px] w-[32px] inline-flex justify-center items-center mr-4 ring-offset-1 ring-2`}
              >
                {i + 1}
              </span>
              <span>
                <div className="sm:hidden lg:inline-flex flex-col justify-center">
                  <span className="text-pastelBlue text-sm uppercase">
                    STEP {i + 1}
                  </span>
                  <span className="text-ubuntuBold">{form}</span>
                </div>
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
