import { FormGroup } from "@/app/components/modules/FormGroup";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";

export default function UserTab() {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  return (
    <>
      <p className="text-[22px] font-medium sm:mb-[20px]">Настройки профиля</p>
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
          <FormGroup
            htmlFor="name"
            label="Имя"
            errors={errors.name}
            placeholder="Иван"
            register={register}
            conditions={{
              required: {
                value: true,
                message: "Поле Имя пользователя должно быть заполнено",
              },
            }}
          />
          <FormGroup
            htmlFor="surname"
            label="Отчество"
            errors={errors.surname}
            placeholder="Иванович"
            register={register}
            conditions={{
              required: {
                value: true,
                message: "Поле Отчество пользователя должно быть заполнено",
              },
            }}
          />
          <FormGroup
            htmlFor="email"
            label="Email адрес"
            errors={errors.email}
            placeholder="example@gmail.com"
            register={register}
            conditions={{
              required: {
                value: true,
                message: "Поле Email адрес пользователя должно быть заполнено",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                message: "Пароль должнен содержать заглавные символы и цифры.",
              },
            }}
          />
        </div>
        <Button type="submit">Сохранить</Button>
      </form>
    </>
  );
}
