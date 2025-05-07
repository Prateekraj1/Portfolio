"use client";

import useAlert from "../../hooks/useAlert";
import Alert from "../Alert";
import ContactFoxAnimation from "./ContactFoxAnimation";

const Contact = () => {
  const { alert } = useAlert();

  return (
    <section className="relative flex flex-col lg:flex-row max-w-5xl mx-auto min-h-[calc(100vh-80px)] px-8 sm:px-16 pt-[126px] pb-12">
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <div className="flex-1 min-w-[50%] flex flex-col space-y-5">
        <h1 className="text-3xl sm:text-5xl font-semibold leading-tight font-poppins text-gray-900">
          Get in Touch
        </h1>

        <div className="mt-10 space-y-4 text-[16px] text-blue-600 font-medium">
          <p>
            <span className="font-semibold text-gray-800">Email:</span>{" "}
            <a
              href="mailto:parteekraj8@gmail.com"
              className="hover:underline break-all"
            >
              parteekraj8@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold text-gray-800">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/prateek-raj-729872212"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-all"
            >
              https://www.linkedin.com/in/prateek-raj-729872212/
            </a>
          </p>

          <p>
            <span className="font-semibold text-gray-800">GitHub:</span>{" "}
            <a
              href="https://github.com/Prateekraj1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-all"
            >
              https://github.com/Prateekraj1
            </a>
          </p>

          <p>
            <span className="font-semibold text-gray-800">Mobile:</span>{" "}
            <span>+91-8294867788</span>{" "}
            <span className="text-sm text-gray-500">(Available on WhatsApp)</span>
          </p>
        </div>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] mt-12 lg:mt-0">
        <ContactFoxAnimation />
      </div>
    </section>
  );
};

export default Contact;
