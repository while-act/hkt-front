import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useState } from 'react';
import AuthLayout from '@/app/components/layouts/AuthLayout';
import { signUp } from '@/store/slices/auth/signUp';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RoutePath } from './routes';

const FormGroup = ({ label, htmlFor, placeholder, errors, register, conditions, type = 'text' }) => (
  <div>
    <div className="mb-2 block">
      <Label color={errors && 'failure'} htmlFor={htmlFor} value={label} />
    </div>
    <TextInput
      id={htmlFor}
      type={type}
      placeholder={placeholder}
      color={errors && 'failure'}
      {...register(htmlFor, conditions)}
    />
    {errors && <p className="text-red-600 leading-4 mt-[4px] text-[14px]">{errors.message}</p>}
  </div>
);

export default function LoginPage() {
  const { route, push } = useRouter();
  const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.signUpSlice);

  if (status === 'success') {
    push(RoutePath.Profile);
  }

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const onSubmit = (data) => {
    dispatch(signUp(data));
  };

  return (
    <AuthLayout>
      <p className="text-[32px] dark:text-white mb-[20px]">Регистрация</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormGroup
          htmlFor="name"
          placeholder="Иван"
          label="Имя"
          register={register}
          conditions={{
            required: {
              value: true,
              message: 'Поле Имя должно быть заполнено',
            },
          }}
          errors={errors.name}
        />
        <FormGroup
          htmlFor="email"
          placeholder="example@gmail.com"
          label="Email адрес"
          type="email"
          register={register}
          conditions={{
            required: {
              value: true,
              message: 'Поле Email адрес не заполнено',
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Не соответствует формату электронной почты',
            },
          }}
          errors={errors.email}
        />
        <FormGroup
          htmlFor="password"
          label="Пароль"
          type={showPassword ? 'text' : 'password'}
          register={register}
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
          errors={errors.password}
        />
        <div className="flex items-center gap-2">
          <Checkbox onChange={() => setShowPassword(!showPassword)} id="remember" className="cursor-pointer" />
          <Label htmlFor="remember" className="cursor-pointer">
            Показать пароль
          </Label>
        </div>
        <div className="flex flex-col gap-[4px]">
          <Button type="submit">Зарегистрироваться</Button>
          <span className="text-center dark:text-gray-300">
            Есть аккаунт?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Войти
            </Link>
          </span>
        </div>
      </form>
    </AuthLayout>
  );
}
