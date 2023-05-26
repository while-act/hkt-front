import React, { useState } from "react";
import DashboardLayout from "@/app/components/layouts/DashboardLayout";
import { FiBriefcase, FiUser } from "react-icons/fi";
import { Card } from "flowbite-react";
import UserTab from "@/app/components/modules/dashboard/profile/UserTab";
import OrganizationTab from "@/app/components/modules/dashboard/profile/OrganizationTab";
import {motion, AnimatePresence} from "framer-motion";
import ResetPasswordForm from "@/app/components/modules/dashboard/profile/ResetPasswordForm";

const tab = {
  hidden: {
    display: "none",
    opacity: 0,
    x: "-6%",
  },
  visible: {
    display: "block",
    opacity: 1,
    x: 0
  },
  initial: {
    display: "none",
    opacity: 0,
  },
  transition: {
    duration: 0.5
  }
}
export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-12 gap-4">
        <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
          <div
            className="rounded-lg border h-auto border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex flex-col">
            <div className="flex flex-col py-2 gap-1 px-2">
              <button
                onClick={() => handleTabClick(0)}
                className={`dark:text-gray-400 hover:bg-gray-200 dark:hover:text-white flex items-center p-2 px-2 rounded-lg dark:hover:bg-gray-700 gap-2 cursor-pointer transition-all duration-200 ${activeTab === 0 && "bg-gray-300 dark:bg-gray-700"}`}
              >
                <FiUser className="h-4 w-4" />
                <p>Профиль</p>
              </button>
              <button
                onClick={() => handleTabClick(1)}
                className={`dark:text-gray-400 hover:bg-gray-200 dark:hover:text-white flex items-center p-2 px-2 rounded-lg dark:hover:bg-gray-700 gap-2 cursor-pointer transition-all duration-200 ${activeTab === 1 && "bg-gray-300 dark:bg-gray-700"}`}
              >
                <FiBriefcase className="h-4 w-4" />
                <p>Огранизации</p>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 space-y-5">
          <Card className="overflow-y-hidden">
            <div className="inline-flex justify-center rounded-md shadow-sm sm:hidden" role="group">
              <button onClick={() => handleTabClick(0)} type="button"
                      className={`inline-flex gap-2 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white dark:border-gray-600 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${activeTab === 0 && "bg-gray-900 dark:bg-gray-700"}`}>
                <FiUser className="h-4 w-4" />
                <p>Профиль</p>
              </button>
              <button onClick={() => handleTabClick(1)} type="button"
                      className={`inline-flex gap-2 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white dark:border-gray-600 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${activeTab === 1 && "bg-gray-900 dark:bg-gray-700"}`}>
                <FiBriefcase className="h-4 w-4" />
                <p>Огранизацsии</p>
              </button>
            </div>
            <AnimatePresence>
              <motion.div initial={tab.initial} animate={activeTab === 0 ? tab.visible : tab.hidden} exit={tab.hidden} transition={tab.transition}>
                <UserTab />
              </motion.div>
              <motion.div initial={tab.initial} animate={activeTab === 1 ? tab.visible : tab.hidden} exit={tab.hidden} transition={tab.transition}>
                <OrganizationTab />
              </motion.div>
            </AnimatePresence>
          </Card>
          {activeTab === 0 && <ResetPasswordForm/>}
        </div>

        {/* <Card className="col-span-12 lg:col-span-8 xl:col-span-9"> */}
        {/*   <div className="inline-flex rounded-md shadow-sm sm:hidden" role="group"> */}
        {/*     <button onClick={() => handleTabClick(0)} type="button" */}
        {/*             className={`inline-flex gap-2 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white dark:border-gray-600 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${activeTab === 0 && "bg-gray-900 dark:bg-gray-700"}`}> */}
        {/*       <FiUser className="h-4 w-4" /> */}
        {/*       <p>Профиль</p> */}
        {/*     </button> */}
        {/*     <button onClick={() => handleTabClick(1)} type="button" */}
        {/*             className={`inline-flex gap-2 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white dark:border-gray-600 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${activeTab === 1 && "bg-gray-900 dark:bg-gray-700"}`}> */}
        {/*       <FiBriefcase className="h-4 w-4" /> */}
        {/*       <p>Огранизации</p> */}
        {/*     </button> */}
        {/*   </div> */}
        {/*   {activeTab === 0 && <UserTab />} */}
        {/*   {activeTab === 1 && <OrganizationTab />} */}
        {/* </Card> */}
      </div>
    </DashboardLayout>
  );
}
