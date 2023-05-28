import { motion } from "framer-motion";
import { useState } from "react";
import { FiArchive } from "react-icons/fi";
import { useRouter } from "next/router";
import Logo from "@/app/components/elements/Logo";
import LogoDashboard from "@/app/components/elements/LogoDashboard";

const bg = {
  visible: {
    opacity: 1,
    display: "block",
  },
  hidden: {
    opacity: 0,
    display: "none",
    transition: {
      display: {
        delay: 0.3,
      },
    },
  },
  transition: {
    duration: 0.3,
  },
};

export default function DashboardLayout({ children }) {
  const [isOpen, setOpen] = useState();
  const router = useRouter();

  return (
    <div className="container">
      <div className="flex items-center w-full justify-between sm:hidden mt-[10px] px-3">
        <Logo name="INM" />
        <button
          data-drawer-target="sidebar-multi-level-sidebar"
          data-drawer-toggle="sidebar-multi-level-sidebar"
          aria-controls="sidebar-multi-level-sidebar"
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => setOpen(!isOpen)}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
      </div>

      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 ${
          isOpen ? "transform-none" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <div className="p-2">
              <LogoDashboard name="INM" />
            </div>
            <li>
              <a
                href="/dashboard/projects/table"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 ${
                  router.pathname === "/dashboard/projects/table" &&
                  "dark:bg-gray-600 bg-gray-200"
                }`}
              >
                <FiArchive className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ml-3">Проекты</span>
              </a>
            </li>
            {/* <CustomDropdown name="Профиль">*/}
            {/*  <li>*/}
            {/*    <a*/}
            {/*      href="/"*/}
            {/*      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"*/}
            {/*    >*/}
            {/*      Мой профиль*/}
            {/*    </a>*/}
            {/*  </li>*/}
            {/* </CustomDropdown>*/}
          </ul>
          <div className="space-y-2">
            {/* <div>*/}
            {/*  <a*/}
            {/*    href="/"*/}
            {/*    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"*/}
            {/*  >*/}
            {/*    <svg*/}
            {/*      aria-hidden="true"*/}
            {/*      className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"*/}
            {/*      fill="currentColor"*/}
            {/*      viewBox="0 0 20 20"*/}
            {/*      xmlns="http://www.w3.org/2000/svg"*/}
            {/*    >*/}
            {/*      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />*/}
            {/*      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />*/}
            {/*    </svg>*/}
            {/*    <span className="ml-3">Светлая тема</span>*/}
            {/*  </a>*/}
            {/* </div>*/}
            <a
              href="/dashboard/profile"
              className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
            >
              <div className="flex flex-col">
                <p>Emili Dress</p>
                <p className="text-[14px] text-gray-400">email@gmail.com</p>
              </div>
              <div className="rounded-full flex items-center justify-center h-[44px] w-[44px] bg-gray-300 darkbg-pink-50 bg-opacity-40">
                <p>ED</p>
              </div>
            </a>
          </div>
        </div>
      </aside>

      <motion.div
        initial={{ opacity: 0, display: "none" }}
        animate={isOpen ? bg.visible : bg.hidden}
        transition={bg.transition}
        className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"
        onClick={() => setOpen(false)}
      />

      <div className="p-4 sm:ml-64">{children}</div>
    </div>
  );
}
