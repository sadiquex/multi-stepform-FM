import React, { useState } from "react";
import { DesktopSidebar, MobileSidebar } from "./Assets";
import PersonalInfoForm from "../PersonalInfoForm";
import useMultiStepForm from "../hooks/useMultiStepForm";
import SelectPlanForm from "../SelectPlanForm";
import AddOnsForm from "../AddOnsForm";
import SummaryForm from "../SummaryForm";
import ThankYouPage from "../ThankYouPage";

const FormCard = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    plan: "Arcade",
    yearlyPlan: false,
    isLargerStorage: false,
    isCustomizableProfile: false,
    isOnlineService: false,
  };

  // states to manage user input
  const [formData, setFormData] = useState(initialValues);
  // state to check whether user has confirmed
  const [isConfirmed, setIsConfirmed] = useState(false);

  // function to update form
  const updateFormHandler = (fieldToUpdate) => {
    setFormData((prev) => ({ ...formData, ...fieldToUpdate }));
  };

  const forms = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  const {
    currentIndex,
    goBackwards,
    goForward,
    goToSection,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm(forms.length);

  const boxShadow = "shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]";

  return (
    <div
      className={`sm:flex-col sm:items-center flex sm:w-auto w-[800px] rounded-lg sm:p-0 bg-white rounded-6 p-4 gap-8 font-ubuntuRegular ${boxShadow}`}
    >
      {/* sidebar */}
      <div className="sidebar relative text-white">
        {/* nav elements */}
        <nav className="absolute p-8 sm:top-[50%] sm:-translate-y-[50%]">
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
                      currentIndex === i
                        ? "bg-pastelBlue text-marineBlue  "
                        : ""
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
        {/* sidebars */}
        <div className="sm:block lg:hidden bg-blue-500">
          <MobileSidebar />
        </div>
        <div className="sm:hidden lg:block rounded-lg overflow-hidden">
          <DesktopSidebar className="" />
        </div>
      </div>
      {/* if we're not on the last step, show the forms, else show thank you page */}
      {!isConfirmed ? (
        <div
          className={`sm:${boxShadow} sm:absolute top-[15%] flex flex-1 justify-between bg-white sm:px-6 sm:w-[90%] sm:rounded-md flex-col gap-2`}
        >
          {currentIndex === 0 && (
            // pass the form data object to each form
            <PersonalInfoForm
              formData={formData}
              updateFormHandler={updateFormHandler}
            />
          )}
          {currentIndex === 1 && (
            <SelectPlanForm
              {...formData}
              updateFormHandler={updateFormHandler}
            />
          )}
          {currentIndex === 2 && (
            <AddOnsForm {...formData} updateFormHandler={updateFormHandler} />
          )}
          {currentIndex === 3 && (
            <SummaryForm {...formData} updateFormHandler={updateFormHandler} />
          )}
          {/* last step - Thank you form */}
          {/* {isLastStep && <ThankYouPage />} */}

          {/* buttons */}
          <div className="relative flex justify-between items-center w-[90%] mx-auto font-ubuntuMedium sm:pt-5 pb-6 h-[100px]">
            {!isFirstStep && (
              <button onClick={goBackwards} className="py-2 px-4 text-coolGray">
                Go Back
              </button>
            )}
            {isLastStep ? (
              <button
                onClick={() => {
                  setIsConfirmed(!isConfirmed);
                }}
                className="bg-marineBlue text-white py-2 px-4 absolute right-0 rounded-[8px]"
              >
                Confirm
              </button>
            ) : (
              <button
                onClick={goForward}
                className="bg-marineBlue text-white py-2 px-4 absolute right-0 rounded-[8px]"
              >
                Next Step
              </button>
            )}
          </div>
        </div>
      ) : (
        <ThankYouPage />
      )}
    </div>
  );
};

export default FormCard;
