import { Card } from 'flowbite-react';
import Logo from '@/app/components/elements/Logo';
import ThemeSwitcher from '@/app/components/elements/ThemeSwitcher';
import Link from 'next/link';

export default function AuthLayout({ children, wrapperClassName }) {
  return (
    <div className="container h-screen relative pt-[25px]">
      <div className="flex w-full item-center justify-between relative z-50">
        <Link href="/">
          <Logo name="INM" />
        </Link>
        <ThemeSwitcher />
      </div>
      <div
        className={`sm:absolute relative z-0 left-0 mt-[45px] sm:mt-0 mb-[40px] sm:mb-0 h-full flex items-center justify-center w-full top-0 ${wrapperClassName}`}
      >
        <Card className="mx-auto w-full sm:w-[400px]">{children}</Card>
      </div>
    </div>
  );
}
