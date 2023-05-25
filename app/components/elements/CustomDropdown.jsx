import { motion } from "framer-motion";
import React, { useState } from "react";

const dropdown = {
  visible: { height: "unset", padding: "8px 0" },
  hidden: {
    height: 0,
    padding: 0,
    transition: { padding: { delay: 0.3 } },
  },
};

export default function CustomDropdown({ name, children, ...rest }) {
  const [isOpen, setOpen] = useState();

  return (
    <li {...rest} className="overflow-y-hidden">
      <button
        type="button"
        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        onClick={() => setOpen(!isOpen)}
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          />
        </svg>
        <span className="flex-1 ml-3 text-left whitespace-nowrap">{name}</span>
        <svg
          className={`w-6 h-6 transition duration-300 ${
            isOpen && "rotate-180"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <motion.ul
        initial={dropdown.hidden}
        animate={isOpen ? dropdown.visible : dropdown.hidden}
        transition={{ duration: 0.3 }}
        id="dropdown-example"
        className=""
      >
        {children}
      </motion.ul>
    </li>
  );
}
