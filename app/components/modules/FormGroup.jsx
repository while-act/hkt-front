import { Label, TextInput } from "flowbite-react";

export const FormGroup = ({
  label,
  htmlFor,
  placeholder,
  errors,
  register,
  conditions,
  type = "text",
  labelTools,
}) => (
  <div>
    <div className="mb-2 flex items-center justify-between">
      <Label color={errors && "failure"} htmlFor={htmlFor} value={label} />
      {labelTools}
    </div>
    <TextInput
      id={htmlFor}
      type={type}
      placeholder={placeholder}
      color={errors && "failure"}
      {...register(htmlFor, conditions)}
    />
    {errors && (
      <p className="text-red-600 leading-4 mt-[4px] text-[14px]">
        {errors.message}
      </p>
    )}
  </div>
);
