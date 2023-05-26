import { FormGroup } from "@/app/components/modules/FormGroup";
import { Button, Card } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";

export default function ResetPasswordForm() {
  const {register, formState: {errors}} = useForm({mode: "onSubmit"});

  return (
    <Card>
      <p className="text-[22px] font-medium">Сброс пароля</p>
      <form className="space-y-3">
        <div className="flex flex-col gap-3">
          <FormGroup
            htmlFor="last_name"
            label="Фамилия"
            errors={errors.last_name}
            placeholder="Иванов"
            register={register}
            conditions={{
              required: {
                value: true,
                message: "Поле Фамилия пользователя должно быть заполнено",
              },
            }}
          />

        </div>
        <Button type="submit">Сбросить</Button>
      </form>
    </Card>
  )
}