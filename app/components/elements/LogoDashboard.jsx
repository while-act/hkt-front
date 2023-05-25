import Image from "next/image";
import img from "@/public/img/LogoDashboard.svg";

export default function LogoDashboard({ name, ...rest }) {
  return (
    <div className="flex items-center gap-[10px]" {...rest}>
      <div className="flex items-center w-[32px] h-[32px] p-[6px] bg-pink-50 rounded-[8px]">
        <Image className="w-full" src={img} alt="logo" />
      </div>
      {name && (
        <p className="uppercase dark:text-white text-[24px] font-semibold">
          {name}
        </p>
      )}
    </div>
  );
}
