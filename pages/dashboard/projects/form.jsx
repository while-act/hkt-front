import DashboardLayout from "@/app/components/layouts/DashboardLayout";
import { useState } from "react";
import { Card } from "flowbite-react";

export default function MultistepForm() {
  const [step, setStep] = useState()

  return (
    <DashboardLayout>
      <Card>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <p>Шаг: {step}</p>
            <p></p>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  )
}