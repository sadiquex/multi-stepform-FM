// custom hook to handle forms
import { useState } from "react";

// formSteps is passed from app
const useMultiStepForm = (formSteps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goBackwards = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const goForward = () => {
    if (currentIndex === formSteps - 1) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const goToSection = (sectionClicked) => {
    setCurrentIndex(sectionClicked);
  };

  return {
    currentIndex,
    goBackwards,
    goForward,
    goToSection,
    isFirstStep: currentIndex === 0,
    isLastStep: currentIndex === formSteps - 1,
  };
};

export default useMultiStepForm;
