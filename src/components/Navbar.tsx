"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    `${isActive(path) ? "text-blue-600 pointer-events-none opacity-50" : "text-black"} transition-colors`;

  return (
    <header className='flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0'>
      <Link
        href='/'
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">PR</p>
      </Link>
      <nav className='flex text-lg gap-7 font-medium'>
        <Link href='/about' className={linkClass('/about')}>
          About
        </Link>
        <Link href='/projects' className={linkClass('/projects')}>
          Projects
        </Link>
        <Link href='/contact' className={linkClass('/contact')}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
