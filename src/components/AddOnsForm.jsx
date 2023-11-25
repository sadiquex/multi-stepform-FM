import React from "react";

const AddOnsForm = ({
  updateFormHandler,
  isLargerStorage,
  isCustomizableProfile,
  isOnlineService,
  yearlyPlan,
}) => {
  return (
    <div className="flex flex-col space-y-4 pt-6">
      {/* title */}
      <h2 className="text-marineBlue font-ubuntuBold text-[28px]">
        Pick add-ons
      </h2>
      <p className="text-coolGray font-ubuntuRegular text-[16px]">
        Add-ons help enhance your gaming experience
      </p>

      {/* checkbox cards */}
      <div className="flex flex-col gap-[20px]">
        {/* isOnlineService */}
        <label htmlFor="isOnlineService" className="hover:bg-magnolia">
          {/* left side */}
          <input
            type="checkbox"
            id="isOnlineService"
            name="isOnlineService"
            checked={isOnlineService}
            className="peer hidden"
            onChange={(e) =>
              updateFormHandler({ isOnlineService: e.target.checked })
            }
          />
          <div className="max-w-xl rounded-md border border-red-400 p-5 text-marineBlue ring-1 ring-lightGray transition-all peer-checked:ring-purplishBlue peer-checked:bg-magnolia w-[100%] flex justify-between items-center">
            <input
              type="checkbox"
              id="isOnlineService"
              name="isOnlineService"
              checked={isOnlineService}
              className="peer"
              onChange={(e) =>
                updateFormHandler({ isOnlineService: e.target.checked })
              }
            />
            {/* left side */}
            <span>
              <p className="font-ubuntuBold">Online Service</p>
              <p className="font-ubuntuRegular">Access to multiple games</p>
            </span>
            {/* right side */}
            <span className="text-purplishBlue">
              <span>{!yearlyPlan && <p>+$1/mo</p>}</span>
              <span>{yearlyPlan && <p>+$10/yr</p>}</span>
            </span>
          </div>
        </label>

        {/* isLargerStorage */}
        <label htmlFor="isLargerStorage" className="hover:bg-magnolia">
          <input
            type="checkbox"
            id="isLargerStorage"
            name="isLargerStorage"
            className="peer hidden"
            checked={isLargerStorage}
            onChange={(e) =>
              updateFormHandler({ isLargerStorage: e.target.checked })
            }
          />
          <div className="max-w-xl rounded-md border border-red-400 p-5 text-marineBlue ring-1 ring-lightGray transition-all peer-checked:ring-purplishBlue peer-checked:bg-magnolia w-[100%] flex justify-between items-center">
            <input
              type="checkbox"
              id="isLargerStorage"
              name="isLargerStorage"
              className="peer"
              checked={isLargerStorage}
              onChange={(e) =>
                updateFormHandler({ isLargerStorage: e.target.checked })
              }
            />
            {/* left side */}
            <span>
              <p className="font-ubuntuBold">Larger Storage</p>
              <p className="font-ubuntuRegular">Extra 1TB of cloud save</p>
            </span>
            {/* right side */}
            <span className="text-purplishBlue">
              <span>{!yearlyPlan && <p>+$2/mo</p>}</span>
              <span>{yearlyPlan && <p>+$20/yr</p>}</span>
            </span>
          </div>
        </label>

        {/* isCustomizableProfile */}
        <label htmlFor="isCustomizableProfile" className="hover:bg-magnolia">
          <input
            type="checkbox"
            id="isCustomizableProfile"
            name="isCustomizableProfile"
            className="peer hidden"
            checked={isCustomizableProfile}
            onChange={(e) =>
              updateFormHandler({ isCustomizableProfile: e.target.checked })
            }
          />
          <div className="max-w-xl rounded-md border border-red-400 p-5 text-marineBlue ring-1 ring-lightGray transition-all peer-checked:ring-purplishBlue peer-checked:bg-magnolia w-[100%] flex justify-between items-center">
            <input
              type="checkbox"
              id="isCustomizableProfile"
              name="isCustomizableProfile"
              className="peer"
              checked={isCustomizableProfile}
              onChange={(e) =>
                updateFormHandler({ isCustomizableProfile: e.target.checked })
              }
            />
            {/* left side */}
            <span>
              <p className="font-ubuntuBold">Customizable Profile</p>
              <p className="font-ubuntuRegular">
                Custom themes on your profile
              </p>
            </span>
            {/* right side */}
            <span className="text-purplishBlue">
              <span>{!yearlyPlan && <p>+$2/mo</p>}</span>
              <span>{yearlyPlan && <p>+$20/yr</p>}</span>
            </span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default AddOnsForm;
