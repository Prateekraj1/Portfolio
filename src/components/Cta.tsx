import Link from "next/link";

const CTA = () => {
  return (
    <section className='w-full flex items-center md:flex-row flex-col sm:mt-16 mt-8 gap-7'>
      <p className='text-black-500 font-extrabold flex-1 text-3xl max-md:text-center'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <Link href='/contact' className='text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
