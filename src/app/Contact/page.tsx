"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Page = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
    phone_number: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const apiUrl = "https://eliteproject.onrender.com/submit_message";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/david-rodrigo-Fr6zexbmjmc-unsplash.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "60vh",
        }}
      ></div>
      <div className="bg-[#f2f2f2]">
        <div className="container mx-auto px-10 w-full font-urbanist text-black py-20">
          <div className="flex lg:flex-row flex-col justify-between w-full">
            <div className="lg:max-w-md w-full">
              <h1 className="lg:text-8xl md:text-6xl text-xl lg:text-start text-center  font-bold">
                Let's Talk
              </h1>
              <div className="w-full h-0.5 bg-[#F5F5F5]"></div>
              <p className="md:text-2xl text-base lg:text-start text-center font-light py-3">
                Got a project on your mind? Let's discuss about the details.
              </p>
            </div>
            <div className="lg:max-w-md w-full">
              <form className="p-6 " onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full md:w-96 border-b-[1px] bg-transparent border-black focus:ring-2 outline-none focus:ring-blue-500 focus:border-transparent "
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full md:w-96  border-b-[1px] bg-transparent border-black focus:ring-2 outline-none focus:ring-blue-500 focus:border-transparent "
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full md:w-96  border-b-[1px] bg-transparent border-black focus:ring-2 outline-none focus:ring-blue-500 focus:border-transparent "
                    placeholder="Your Phone Number"
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1 p-2 w-full md:w-96  border-b-[1px] bg-transparent border-black focus:ring-2 outline-none focus:ring-blue-500 focus:border-transparent "
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#052087] text-white px-4 py-2 rounded-md hover:bg-[#354995] transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="lg:text-start text-center mt-4">
            <h1 className="text-2xl font-bold">Call Us</h1>
            <p className="text-xl">+2348076478400</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
