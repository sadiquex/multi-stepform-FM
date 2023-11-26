import { planOptions } from "./SelectPlanForm";

const SummaryForm = ({
  yearlyPlan,
  isOnlineService,
  isLargerStorage,
  isCustomizableProfile,
  plan,
  updateFormHandler,
}) => {
  //

  // grab values for the true booleans: [isOnlineService, isLargerStorage, isCustomizableProfile]
  const sumHandler = () => {
    if (isOnlineService.monthly) {
      console.log(isOnlineService);
    }
  };

  sumHandler();

  return (
    <div className="flex flex-col space-y-4 pt-6">
      {/* title texts */}
      <h2 className="text-marineBlue font-ubuntuBold text-[28px]">
        Finishing up
      </h2>
      <p className="text-coolGray font-ubuntuRegular text-[16px]">
        Double-check if everything looks OK before confirming.
      </p>
      {/* card */}
      <div className="max-w-xl rounded-lg bg-magnolia p-5">
        <div className="text-marineBlue w-[100%] flex justify-between items-center">
          {/* left side */}
          <span>
            <p className="font-ubuntuBold">
              {plan}({!yearlyPlan ? "Monthly" : "Yearly"})
            </p>
            <button
              type="button"
              className="font-ubuntuRegular underline cursor-pointer text-coolGray hover:text-purplishBlue"
              onClick={() => updateFormHandler({ yearlyPlan: !yearlyPlan })}
            >
              Change
            </button>
          </span>
          {/* right side */}
          <span className="font-ubuntuBold">
            {/* if is yearly is false, show the monthly cost, else show the yearly cost */}
            {!yearlyPlan
              ? `$${planOptions[plan].monthly}/mo`
              : `$${planOptions[plan].yearly}/yr`}
          </span>
        </div>
        {/* line */}
        <hr className="h-px bg-coolGray border-0 my-4" />

        {/* second */}
        <div className="text-marineBlue w-[100%] flex flex-col gap-1 justify-between items-center">
          {/* online service */}
          {isOnlineService ? (
            <span className="flex justify-between w-[100%]">
              <p className="font-ubuntuRegular text-coolGray">Online Service</p>
              <p className="font-ubuntuRegular text-marineBlue">
                {!yearlyPlan
                  ? `$${planOptions.onlineServices.monthly}/mo`
                  : `$${planOptions.onlineServices.yearly}/yr`}
              </p>
            </span>
          ) : (
            ""
          )}

          {/* larger storage */}
          {isLargerStorage ? (
            <span className="flex justify-between w-[100%]">
              <p className="font-ubuntuRegular text-coolGray">Larger Storage</p>
              <p className="font-ubuntuRegular text-marineBlue">
                {!yearlyPlan
                  ? `$${planOptions.largerStorage.monthly}/mo`
                  : `$${planOptions.largerStorage.yearly}/yr`}
              </p>
            </span>
          ) : (
            ""
          )}
          {/* customizable profile */}
          {isCustomizableProfile ? (
            <span className="flex justify-between w-[100%]">
              <p className="font-ubuntuRegular text-coolGray">
                Customizable Profile
              </p>
              <p className="font-ubuntuRegular text-marineBlue">
                {!yearlyPlan
                  ? `$${planOptions.customizableProfile.monthly}/mo`
                  : `$${planOptions.customizableProfile.yearly}/yr`}
              </p>
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      <span className="flex justify-between items-center w-[94%] mx-auto">
        <p className="font-ubuntuRegular text-coolGray">
          Total {!yearlyPlan ? "(Per Month)" : "(Per Year)"}
        </p>
        <p className="font-ubuntuBold text-purplishBlue text-[24px]">
          {!yearlyPlan ? "$12/mo" : "$120/yr"}
        </p>
      </span>
    </div>
  );
};

export default SummaryForm;
