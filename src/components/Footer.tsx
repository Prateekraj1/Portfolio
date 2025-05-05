import Link from "next/link";
import { socialLinks } from "../constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className='max-w-5xl mx-auto sm:px-16 pb-6 px-8 flex flex-col gap-7 font-poppins'>
      <hr className='border-slate-200' />

      <div className='flex flex-wrap gap-7 items-center justify-between'>
        <p>
          © 2025 <strong>Prateek Raj</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.link} target='_blank'>
              <Image
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
