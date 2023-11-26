import React, { useState } from "react";
import { DesktopSidebar } from "./shared/Assets";

const PersonalInfoForm = ({ formData, updateFormHandler }) => {
  const { name, email, phone } = formData;
  // array to create fields
  const inputFields = [
    {
      label: "Name",
      name: "name",
      placeholder: "e.g. Stephen King",
      value: name,
      id: "name",
      type: "text",
      required: true,
      pattern: "^[A-Z][a-zA-Z\\s]+$",
    },
    // email
    {
      label: "Email Address",
      name: "email",
      placeholder: "e.g. stephenKing@lorem.com",
      value: email,
      id: "email",
      type: "email",
      required: true,
      pattern: "^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$",
    },
    {
      label: "Phone Number",
      name: "phone",
      placeholder: "e.g. +1 234 567 890",
      value: phone,
      id: "phone",
      type: "text",
      required: true,
      pattern: "^[0-9+s]+$",
    },
  ];

  // function to validate and update input

  return (
    <div className="flex flex-col space-y-4 pt-6">
      <h2 className="text-marineBlue font-ubuntuBold text-[28px]">
        Personal info
      </h2>
      <p className="text-coolGray font-ubuntuRegular text-[16px]">
        Please provide your name, email address, and phone number.
      </p>
      {/* map */}
      {inputFields.map((field, i) => (
        <label
          key={i}
          htmlFor={field.name}
          className="text-marineBlue font-ubuntuMedium"
        >
          <div className="pb-2">{field.label}</div>
          <input
            className={`py-2 px-4 text-black w-[100%] rounded-[8px] cursor-pointer border focus:outline-none focus:ring-1 focus:border-purplishBlue invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-50`}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            pattern={field.pattern}
            // values
            value={formData[field.name]}
            onChange={(e) => {
              // function to update fields
              updateFormHandler({ ...formData, [field.name]: e.target.value });
            }}
          />
        </label>
      ))}
    </div>
  );
};
export default PersonalInfoForm;
