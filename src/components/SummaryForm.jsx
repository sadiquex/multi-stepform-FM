import React from "react";

const SummaryForm = ({ yearlyPlan, isOnlineService, isLargerStorage }) => {
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
            <p className="font-ubuntuBold">Arcade(Monthly)</p>
            <p className="font-ubuntuRegular underline text-coolGray">Change</p>
          </span>
          {/* right side */}
          <span className="font-ubuntuBold">$9/mo</span>
        </div>
        {/* line */}
        <hr className="h-px bg-coolGray border-0 my-4" />

        {/* second */}
        <div className="text-marineBlue w-[100%] flex flex-col gap-1 justify-between items-center">
          {/* online service */}
          <span className="flex justify-between w-[100%]">
            <p className="font-ubuntuRegular text-coolGray">Online Service</p>
            <p className="font-ubuntuRegular text-marineBlue">$1/mo</p>
          </span>
          {/* larger storage */}
          <span className="flex justify-between w-[100%]">
            <p className="font-ubuntuRegular text-coolGray">Larger Storage</p>
            <p className="font-ubuntuRegular text-marineBlue">$2/mo</p>
          </span>
        </div>
      </div>
      <span className="flex justify-between items-center w-[94%] mx-auto">
        <p className="font-ubuntuRegular text-coolGray">Total (Per Month)</p>
        <p className="font-ubuntuBold text-purplishBlue text-[24px]">$2/mo</p>
      </span>
    </div>
  );
};

export default SummaryForm;
