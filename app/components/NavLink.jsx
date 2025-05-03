import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block font-sans py-1 px-2 text-lg font-medium text-[#000000] hover:font-bold rounded md:p-0 hover:text-black"
    >
      {title}
    </Link>
  );
};

export default NavLink;