"use client";
import useAlert from "../../hooks/useAlert";
import Alert from "../Alert";
import ContactFoxAnimation from "./ContactFoxAnimation";

const Contact = () => {
  const { alert } = useAlert();

  return (
    <section className="relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
          Get in Touch
        </h1>
        <p className="text-black-500 font-semibold mt-20 text-[#2196f3]">
          Email :{" "}
          <a href="mailto:parteekraj8@gmail.com">parteekraj8@gmail.com</a>
        </p>
        <p className="text-black-500 font-semibold mt-5 text-[#2196f3]">
          LinkedIn :{" "}
          <a href="https://www.linkedin.com/in/prateek-raj-729872212">
            https://www.linkedin.com/in/prateek-raj-729872212/
          </a>
        </p>
        <p className="text-black-500 font-semibold mt-5 text-[#2196f3]">
          Github :{" "}
          <a href="https://github.com/Prateekraj1">
            https://github.com/Prateekraj1
          </a>
        </p>
        <p className="text-black-500 font-semibold mt-5 text-[#2196f3]">
          Mobile : +91-8294867788 ( available on Whatsapp ){" "}
        </p>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <ContactFoxAnimation />
      </div>
    </section>
  );
};

export default Contact;
