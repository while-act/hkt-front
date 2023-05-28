import { AiFillCheckCircle } from "react-icons/ai";

export default function Header({step}) {
  return (
    <div className="flex items-center justify-between">
      <ol
        className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        <li
          className={`flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700 ${step === 1 && "text-blue-600 dark:text-blue-500"}`}>
              <span
                className="flex items-center gap-1 after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                {step === 1 ? <AiFillCheckCircle className="mr-1" /> : <span className="mr-2">1</span>}
                Основное
              </span>
        </li>
        <li
          className={`flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700 ${step === 2 && "text-blue-600 dark:text-blue-500"}`}>
              <span
                className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  {step === 2 ? <AiFillCheckCircle className="mr-1" /> : <span className="mr-2">2</span>}
                Объект
              </span>
        </li>
        <li className={`flex items-center ${step === 3 && "text-blue-600 dark:text-blue-500"}`}>
          {step === 3 ? <AiFillCheckCircle className="mr-1" /> : <span className="mr-2">3</span>}
          Прочее
        </li>
      </ol>
    </div>
  )
}