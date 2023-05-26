import { Label, Select } from "flowbite-react";

export const SelectFormGroup = ({
                            label,
                            htmlFor,
                            errors,
                            register,
                            conditions,
                            labelTools,
                            children
                          }) => (
  <div>
    <div className="mb-2 flex items-center justify-between">
      <Label color={errors && "failure"} htmlFor={htmlFor} value={label} />
      {labelTools}
    </div>
    {/* <select id={htmlFor} */}
    {/*         {...register(htmlFor, conditions)} */}
    {/*         placeholder={placeholder} */}
    {/*         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> */}
    {/*   {children} */}
    {/* </select> */}
    <Select id={htmlFor} {...register(htmlFor, conditions)} color={errors && "failure"}>
      {children}
    </Select>
    {errors && (
      <p className="text-red-600 leading-4 mt-[4px] text-[14px]">
        {errors.message}
      </p>
    )}
  </div>
);
