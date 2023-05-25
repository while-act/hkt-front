import { Card } from "flowbite-react";
import Logo from "@/app/components/elements/Logo";
import ThemeSwitcher from "@/app/components/elements/ThemeSwitcher";

export default function AuthLayout({ children }) {
  return (
    <div className="container h-screen relative pt-[25px]">
      <div className="flex w-full item-center justify-between relative z-50">
        <Logo name="INM" />
        <ThemeSwitcher />
      </div>
      <div className="absolute z-0 left-0 px-[20px] sm:px-0 h-full flex items-center justify-center w-full top-0">
        <Card className="mx-auto w-full sm:w-[400px]">{children}</Card>
      </div>
    </div>
  );
}
