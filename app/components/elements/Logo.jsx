import Image from "next/image";
import img from "@/public/img/Logo.svg";
import img2 from "@/public/img/LogoDashboard.svg";
import { useTheme } from "@/hooks/useTheme";

export default function Logo({ name }) {
  const [theme, setTheme] = useTheme();

  return (
    <div className="flex items-center gap-[10px] md:gap-[15px]">
      {theme === "dark" && (
        <Image src={img} className="w-[32px] md:w-[62px]" alt="logo" />
      )}
      {theme === "white" && (
        <Image src={img2} className="w-[32px] md:w-[62px]" alt="logo" />
      )}
      {name && (
        <p className="uppercase dark:text-white text-[24px] md:text-[36px] font-semibold">
          {name}
        </p>
      )}
    </div>
  );
}
