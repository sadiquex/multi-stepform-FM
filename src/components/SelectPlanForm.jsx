import { AdvancedIcon, ArcadeIcon, ProIcon } from "./shared/Assets";

// plans options available
export const planOptions = {
  Arcade: {
    monthly: 9,
    yearly: 90,
  },
  Advanced: {
    monthly: 12,
    yearly: 120,
  },
  Pro: {
    monthly: 15,
    yearly: 150,
  },
  onlineServices: {
    monthly: 1,
    yearly: 10,
  },
  largerStorage: {
    monthly: 2,
    yearly: 20,
  },
  customizableProfile: {
    monthly: 2,
    yearly: 20,
  },
};

const SelectPlanForm = ({ plan, yearlyPlan, updateFormHandler }) => {
  return (
    <div className="flex flex-col space-y-4 pt-6">
      {/* title texts */}
      <h2 className="text-marineBlue font-ubuntuBold text-[28px]">
        Select your plan
      </h2>
      <p className="text-coolGray font-ubuntuRegular text-[16px]">
        You have the option of monthly or yearly billing.
      </p>

      {/* cards */}
      <div className="sm:flex flex-col grid grid-cols-3 gap-2">
        {/* arcade */}
        <label htmlFor="arcade" className="">
          <input
            type="radio"
            name="plan"
            id="arcade"
            className="peer hidden"
            checked={plan === "Arcade"}
            onChange={(e) => updateFormHandler({ plan: "Arcade" })}
          />
          <div className="sm:flex-row gap-2 sm:justify-start flex flex-col justify-between max-w-xl rounded-md p-5 text-marineBlue font-ubuntuBold ring-1 ring-lightGray transition-all peer-checked:ring-purplishBlue peer-checked:bg-alabaster">
            <ArcadeIcon />
            <div className="">
              Arcade
              {yearlyPlan ? (
                <span>
                  <p className="text-coolGray text-sm font-ubuntuRegular">
                    ${planOptions.Arcade.yearly}/yr
                  </p>

                  <p className="text-marineBlue text-sm font-ubuntuRegular">
                    2 months free
                  </p>
                </span>
              ) : (
                <p className="text-coolGray text-sm font-ubuntuRegular">
                  ${planOptions.Arcade.monthly}/mo
                </p>
              )}
            </div>
          </div>
        </label>

        {/* advanced */}
        <label htmlFor="advanced" className="">
          <input
            type="radio"
            name="plan"
            id="advanced"
            className="peer hidden"
            checked={plan === "Advanced"}
            onChange={(e) => updateFormHandler({ plan: "Advanced" })}
          />
          <div className="sm:flex-row gap-2 sm:justify-start flex flex-col justify-between max-w-xl rounded-md p-5 text-marineBlue font-ubuntuBold ring-1 ring-lightGray transition-all peer-checked:ring-purplishBlue peer-checked:bg-alabaster">
            <AdvancedIcon />
            <div>
              Advanced
              {/* if yearlyPlan is true, show $120/year and 2 months free, else show $90/yr */}
              {yearlyPlan ? (
                <span>
                  <p className="text-coolGray text-sm font-ubuntuRegular ">
                    $120/yr
                  </p>

                  <p className="text-marineBlue text-sm font-ubuntuRegular ">
                    2 months free
                  </p>
                </span>
              ) : (
                <p className="text-coolGray text-sm font-ubuntuRegular">
                  $12/mo
                </p>
              )}
            </div>
          </div>
        </label>

        {/* pro */}
        <label htmlFor="pro" className="">
          <input
            type="radio"
            name="plan"
            id="pro"
            className="peer hidden"
            checked={plan === "Pro"}
            onChange={(e) => updateFormHandler({ plan: "Pro" })}
          />
          <div className="sm:flex-row gap-2 sm:justify-start flex flex-col justify-between max-w-xl rounded-md p-5 text-marineBlue font-ubuntuBold ring-1 ring-lightGray transition-all peer-checked:ring-purplishBlue peer-checked:bg-alabaster">
            <ProIcon />
            <div>
              Pro
              {yearlyPlan ? (
                <span>
                  <p className="text-coolGray text-sm font-ubuntuRegular">
                    $150/yr
                  </p>

                  <p className="text-marineBlue text-sm font-ubuntuRegular">
                    2 months free
                  </p>
                </span>
              ) : (
                <p className="text-coolGray text-sm font-ubuntuRegular">
                  $15/mo
                </p>
              )}
            </div>
          </div>
        </label>
      </div>

      {/* toggle btn monthly and yearly */}
      <div className="flex gap-2 bg-magnolia justify-center items-center rounded-[6px] h-[40px] font-ubuntuBold">
        <span
          className={`${!yearlyPlan ? "text-marineBlue" : "text-coolGray"}`}
        >
          Monthly
        </span>

        {/* toggle */}
        <label
          className="relative inline-flex items-center cursor-pointer"
          htmlFor="yearlyPlanToggle"
        >
          <input
            type="checkbox"
            value=""
            id="yearlyPlanToggle"
            name="yearlyPlan"
            checked={yearlyPlan}
            onChange={(e) =>
              updateFormHandler({ yearlyPlan: e.target.checked })
            }
            className="peer hidden"
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {/* Checked toggle */}
          </span>
        </label>

        {/* yearly */}
        <span className={`${yearlyPlan ? "text-marineBlue" : "text-coolGray"}`}>
          Yearly
        </span>
      </div>
    </div>
  );
};

export default SelectPlanForm;
