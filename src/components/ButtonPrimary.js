import Link from "next/link";

const Button = ({ text, className = "", href = "#" }) => {
  return (
    <button
      className={`relative inline-block px-4 py-2 font-medium group ${className}`}>
      <span
        className="absolute inset-0 w-full h-full transition duration-200 ease-out transform 
        skew-x-[15deg] skew-y-[-10deg] translate-x-[6px] translate-y-[4px] bg-secundary 
        group-hover:translate-x-0 group-hover:translate-y-0 group-hover:skew-x-0 group-hover:skew-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-secundary group-hover:bg-secundary"></span>
      <span className="relative text-secundary group-hover:text-white">
        <Link href={href} target="_blank">
          {text}
        </Link>
      </span>
    </button>
  );
};

export default Button;
