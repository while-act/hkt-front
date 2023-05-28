import { Checkbox, Label } from "flowbite-react";

export default function CustomCheckbox({htmlFor, label}) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id={htmlFor} />
      <Label htmlFor={htmlFor}>
        {label}
      </Label>
    </div>
  )
}