import { AnimatePresence, motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useTheme();

  const sun = {
    view: { scale: 1, opacity: 1, y: 0 },
    hidden: { scale: 0, opacity: 0, y: -10 },
  };
  const moon = {
    view: { scale: 1, opacity: 1, y: 0 },
    hidden: { scale: 0, opacity: 0, y: 10 },
  };

  const changeTheme = () => {
    setTheme(theme == "dark" ? "white" : "dark");
  };

  return (
    <AnimatePresence>
      <button
        type="button"
        className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2.5 rounded-lg w-[36px] h-[36px] flex items-center justify-center"
        onClick={changeTheme}
      >
        <motion.div
          initial={sun.view}
          animate={theme === "dark" ? sun.view : sun.hidden}
          className="absolute"
        >
          <FiSun className="text-gray-500 dark:text-gray-400 stroke-2" />
        </motion.div>
        <motion.div
          initial={moon.view}
          animate={theme === "white" ? moon.view : moon.hidden}
        >
          <FiMoon className="text-gray-500 dark:text-gray-400 stroke-2" />
        </motion.div>
      </button>
    </AnimatePresence>
  );
}
