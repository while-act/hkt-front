import { Label, Radio } from "flowbite-react";
import React from "react";

export default function CustomRadio({ label, htmlFor, checked = false, register, conditions, errors, registerName, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Radio
          defaultChecked={checked}
          id={htmlFor}
          name={htmlFor}
          value={label}
          onChange={onChange}
          color={errors && "failure"}
          {...register(registerName, conditions)}
        />
        <Label color={errors && "failure"} htmlFor={htmlFor}>
          {label}
        </Label>
      </div>
      {errors && (
        <p className="text-red-600 leading-4 mt-[4px] text-[14px]">
          {errors.message}
        </p>
      )}
    </div>
  );
}