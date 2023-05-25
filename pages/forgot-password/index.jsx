import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";
import Link from "next/link";
import AuthLayout from "@/app/components/layouts/AuthLayout";
import { FormGroup } from "@/app/components/modules/FormGroup";

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <p className="text-[32px] dark:text-white mb-[20px]">Сброс пароля</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormGroup
          label="Email адрес"
          type="email"
          placeholder="example@gmail.com"
          htmlFor="email"
          register={register}
          errors={errors.email}
          conditions={{
            required: {
              value: true,
              message: "Поле Email адрес не заполнено",
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          }}
        />
        <div className="flex flex-col gap-[4px]">
          <Button type="submit">Сбросить</Button>
          <span className="text-center dark:text-gray-300">
            Вспомнили пароль?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Войти
            </Link>
          </span>
        </div>
      </form>
    </AuthLayout>
  );
}
