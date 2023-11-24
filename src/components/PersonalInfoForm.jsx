import React from "react";
import { DesktopSidebar } from "./shared/Assets";

const PersonalInfoForm = ({ name, email, phone, updateFormHandler }) => {
  return (
    <div className="flex flex-col space-y-4 pt-6">
      <h2 className="text-marineBlue font-ubuntuBold text-[28px]">
        Personal info
      </h2>
      <p className="text-coolGray font-ubuntuRegular text-[16px]">
        Please provide your name, email address, and phone number.
      </p>

      <label htmlFor="name" className="text-marineBlue font-ubuntuMedium">
        Name
      </label>
      <input
        name="name"
        type="text"
        placeholder="e.g. Stephen King"
        value={name}
        id="name"
        onChange={(e) => updateFormHandler({ name: e.target.value })}
        required
        // autoComplete="name"
        className="py-2 px-4 rounded-[8px] cursor-pointer border focus:outline-none focus:ring-1 focus:border-purplishBlue "
      />
      <label htmlFor="name" className="text-marineBlue font-ubuntuMedium">
        Email Address
      </label>
      <input
        name="email"
        type="text"
        placeholder="e.g. stephenking@lorem.com"
        value={email}
        onChange={(e) => updateFormHandler({ email: e.target.value })}
        id="email"
        required
        // autoComplete="email"
        className="py-2 px-4 rounded-[8px] cursor-pointer border focus:outline-none focus:ring-1 focus:border-purplishBlue"
      />

      <label htmlFor="name" className="text-marineBlue font-ubuntuMedium">
        Phone Number
      </label>
      <input
        name="phone"
        type="text"
        placeholder="e.g. +1 234 567 890"
        value={phone}
        onChange={(e) => updateFormHandler({ phone: e.target.value })}
        id="phone"
        required
        // autoComplete="phone"
        className="py-2 px-4 rounded-[8px] cursor-pointer border focus:outline-none focus:ring-1 focus:border-purplishBlue"
      />
    </div>
  );
};
export default PersonalInfoForm;
