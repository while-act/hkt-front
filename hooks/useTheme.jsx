import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const colorTheme = localStorage.getItem("color-theme");
    if (colorTheme && (colorTheme === "dark" || colorTheme === "white")) {
      setTheme(colorTheme);
    } else {
      setTheme("dark"); // Значение по умолчанию, если в localStorage нет или некорректное значение
    }
  }, []);

  const setThemeLocalStorage = (newTheme) => {
    if (newTheme === "dark" || newTheme === "white") {
      setTheme(newTheme);
      localStorage.setItem("color-theme", newTheme);
      document.documentElement.className = newTheme;
    }
  };

  return [theme, setThemeLocalStorage];
};
