import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.getItem("color-theme") === "white") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "white");
    } else {
      localStorage.setItem("color-theme", "dark");
    }
  }, []);
  return <Component {...pageProps} />;
}
