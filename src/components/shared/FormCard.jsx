import React, { useState } from "react";
import { DesktopSidebar } from "./Assets";
import PersonalInfoForm from "../PersonalInfoForm";
import useMultiStepForm from "../hooks/useMultiStepForm";
import SelectPlanForm from "../SelectPlanForm";
import AddOnsForm from "../AddOnsForm";
import SummaryForm from "../SummaryForm";

const FormCard = ({ children }) => {
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

  return (
    <div className="flex flex-1 bg-white rounded-6 text-black p-4 gap-8 w-[900px] font-ubuntuRegular">
      {/* sidebar */}
      <div className="sidebar relative text-white">
        {/* nav elements */}
        <nav className="absolute p-8">
          <ul className=" flex flex-col gap-10">
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
                        ? "bg-pastelBlue text-marineBlue ring-offset-0"
                        : ""
                    } rounded-full font-ubuntuBold h-[32px] w-[32px] inline-flex justify-center items-center mr-4 ring-offset-2 ring-2`}
                  >
                    {i + 1}
                  </span>
                  <span>
                    <div className="inline-flex flex-col justify-center">
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
        <DesktopSidebar className="absolute" />
      </div>

      {/* right side */}
      <div className="flex flex-1 justify-between bg-white flex-col gap-2">
        {currentIndex === 0 && (
          // pass the form data object to each form
          <PersonalInfoForm
            {...formData}
            updateFormHandler={updateFormHandler}
          />
        )}
        {currentIndex === 1 && (
          <SelectPlanForm {...formData} updateFormHandler={updateFormHandler} />
        )}
        {currentIndex === 2 && (
          <AddOnsForm {...formData} updateFormHandler={updateFormHandler} />
        )}
        {currentIndex === 3 && <SummaryForm />}

        <div className="pb-6">
          {/* buttons */}
          <div className="relative flex justify-between items-center w-[90%] mx-auto font-ubuntuMedium">
            {!isFirstStep && (
              <button
                onClick={goBackwards}
                className="py-2 px-4 text-marineBlue "
              >
                Go Back
              </button>
            )}
            <button
              onClick={goForward}
              className="bg-marineBlue text-white py-2 px-4 absolute right-0 rounded-[8px]"
            >
              {isLastStep ? "Confirm" : "Next Step"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
