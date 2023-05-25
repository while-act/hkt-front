export default function Input({ name, type, placeholder, className, ...rest }) {
  return (
    <input
      className={`h-[50px] rounded-[14px] border border-[#202020] bg-transparent px-[15px] outline-none focus:border-blue-500 placeholder:text-gray-200 text-neutral-25 ${className}`}
      type={type}
      id={name}
      placeholder={placeholder}
      {...rest}
    />
  );
}
