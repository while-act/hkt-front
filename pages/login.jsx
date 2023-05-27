import { Button, Checkbox, Label } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import AuthLayout from '@/app/components/layouts/AuthLayout';
import { FormGroup } from '@/app/components/modules/FormGroup';
import { authSignIn } from '@/api/services';
import { useSelector } from 'react-redux';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const onSubmit = async (data) => {
    const user = await authSignIn(data);
    const res = await user.json();
    console.log(res);
  };

  return (
    <AuthLayout>
      <p className="text-[32px] dark:text-white mb-[20px]">Вход в аккаунт</p>
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
              message: 'Поле Email адрес не заполнено',
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          }}
        />
        <FormGroup
          label="Пароль"
          type="password"
          htmlFor="password"
          register={register}
          errors={errors.password}
          conditions={{
            required: {
              value: true,
              message: 'Поле Пароль не заполнено',
            },
            minLength: {
              value: 8,
              message: 'Должен содержать более 8 символов',
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
              message: 'Пароль должнен содержать заглавные символы и цифры.',
            },
          }}
          labelTools={
            <Link href="/forgot-password" className="text-[14px] text-blue-600">
              Забыли пароль?
            </Link>
          }
        />
        <div className="flex items-center gap-2">
          <Checkbox id="remember" className="cursor-pointer" />
          <Label htmlFor="remember" className="cursor-pointer">
            Запомнить меня
          </Label>
        </div>
        <div className="flex flex-col gap-[4px]">
          <Button type="submit">Войти</Button>
          <span className="text-center dark:text-gray-300">
            Нет аккаунта?{' '}
            <Link href="/register" className="text-blue-600 hover:underline">
              Создать
            </Link>
          </span>
        </div>
      </form>
    </AuthLayout>
  );
}
