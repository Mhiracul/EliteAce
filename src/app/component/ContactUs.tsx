import React from "react";

const ContactUs = () => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://seveninvtradings.com/assets/miner/img/bg/request-call.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container py-20 w-full md:mx-auto px-10">
        <div className="text-center">
          <h3 className="text-3xl font-bold uppercase text-white">
            <span className="text-[#0018A8]">Request a Call</span>
          </h3>
          <p className="width-55 sm-width-75 whitespace-pre-line xs-width-95 mt-4 text-[#fff] text-normal text-sm ">
            We have dedicated EliteAndAce Properties advisors who are available
            to give a free consultation call, and guide you on how to secure
            your home.
            <span className="border-b border-[#dee2e6] mt-3 block w-full"></span>
          </p>
        </div>
        <div className="py-10 mt-10 w-full mx-auto">
          <form action="">
            <div className="mb-5.5 flex flex-col  gap-10 sm:flex-row">
              <div className="w-full sm:w-1/2">
                <div className="relative">
                  <input
                    className="w-full bg-white text-xs py-3 px-5 text-black "
                    type="text"
                    placeholder="Your Full Name"
                    name="firstName"
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <input
                  className="w-full   bg-white text-xs py-3 px-5 text-black  "
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="mb-5.5 flex flex-col text-xs  gap-10 sm:flex-row mt-6">
              <div className="w-full sm:w-1/2">
                <div className="relative">
                  <input
                    className="w-full bg-white py-3 px-5 text-black "
                    type="number"
                    placeholder="Your Phone Number"
                    name="Phone number"
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <button className="bg-[#0018A8] text-sm text-white px-5 py-3 rounded-none">
                  <a
                    className="text-[#939393]"
                    href={`mailto:${"contact@pendoraventures.com"}?subject=${"Your Subject"}&body=${"Your Message"}`}
                  >
                    Request a Call
                  </a>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
