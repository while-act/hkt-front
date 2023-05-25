import { FiUsers } from "react-icons/fi";
import Link from "next/link";
import { useEffect } from "react";
import Logo from "@/app/components/elements/Logo";
import ThemeSwitcher from "@/app/components/elements/ThemeSwitcher";

export default function Path() {
  useEffect(() => {
    async function fetchSessionData() {
      try {
        const response = await fetch(
          "http://37.230.195.26:3000/api/auth/session",
          {
            mode: "cors",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(), // body data type must match "Content-Type" header
          }
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Ошибка при получении данных сессии:", error);
      }
    }

    fetchSessionData();
  });

  return (
    <div className="container h-screen relative pt-[25px]">
      <div className="flex w-full item-center justify-between relative z-50">
        <Logo name="INM" />
        <ThemeSwitcher />
      </div>
      <div className="absolute z-0 left-0 px-[20px] sm:px-0 h-full flex flex-col items-center justify-center w-full top-0 mt-[60px] sm:mt-0 pb-[20px]">
        <p className="text-[32px] sm:text-[46px] font-semibold mb-[20px] sm:mb-[25px] text-center">
          Добро пожаловать
        </p>
        <div className="flex flex-col items-center w-full">
          <p className="max-w-[250px] text-center text-gray-500 dark:text-gray-300">
            Выберите удобный способ чтобы продолжить
          </p>
          <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto mt-[20px] gap-4">
            <Link
              href="/register"
              className="h-[250px] flex items-center justify-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 hover:bg-blue-500 hover:text-white dark:border-gray-700 dark:hover:bg-blue-700 p-4 cursor-pointer transition duration-200 dark:hover:border-blue-700"
            >
              <div className="flex flex-col items-center px-4 py-[28px] sm:py-[32px] sm:w-[320px]">
                <FiUsers className="w-[32px] h-[32px]" />
                <p className="mt-[12px] font-semibold text-[24px] text-center">
                  Зарегистрироваться
                </p>
                <p className="mt-[12px] text-gray-400 dark:text-gray-300 text-center">
                  Полный доступ к функционалу сайта
                </p>
              </div>
            </Link>
            <Link
              href="/dashboard"
              className="h-[250px] flex items-center justify-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 hover:bg-blue-500 hover:text-white dark:border-gray-700 dark:hover:bg-blue-700 p-4 cursor-pointer transition duration-200 dark:hover:border-blue-700"
            >
              <div className="flex flex-col items-center px-4 py-[28px] sm:py-[32px] sm:w-[320px]">
                <FiUsers className="w-[32px] h-[32px]" />
                <p className="mt-[12px] font-semibold text-[24px] text-center">
                  Без регистрации
                </p>
                <p className="mt-[12px] text-gray-400 dark:text-gray-300 text-center">
                  Продолжить с ограниченым функционалом
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
