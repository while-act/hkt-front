import DashboardLayout from "@/app/components/layouts/DashboardLayout";
import { Button } from "flowbite-react";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import styles from "@/styles/globals.css";
import Link from "next/link";

export default function Table() {
  return (
    <DashboardLayout>
      <div className="w-full flex justify-between items-center mt-2">
        <p className="text-[24px] font-medium">Все проекты</p>
        <Link href="/dashboard/projects/form">
          <Button>Создать новый</Button>
        </Link>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[20px]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Название проекта
            </th>
            <th scope="col" className="px-6 py-3">
              Площать земельного участка
            </th>
            <th scope="col" className="px-6 py-3">
              Кол-во раб. мест
            </th>
            <th scope="col" className="px-6 py-3">
              Финальная стоимость
            </th>
            <th scope="col" className="px-6 py-3">
              Действия
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white whitespace-nowrap max-w-[120px] max-w-[200px] xl:max-w-[300px] overflow-x-hidden`}>
              Тестовое название какого-то проекта жаль у нас нет масштабирования в связи с нехваткой времени
            </th>
            <td className="px-6 py-4">
              Silver
            </td>
            <td className="px-6 py-4">
              Laptop
            </td>
            <td className="px-6 py-4">
              $2999
            </td>
            <td className="px-6 py-4 flex items-center gap-2">
               <Button className="px-0">
                 <FiEye className="h-4 w-4" />
               </Button>
              <Button className="px-0" color="red">
                <FiTrash className="h-4 w-4" />
              </Button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
