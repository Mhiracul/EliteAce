import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const PrivacyAndPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className=" text-black font-urbanist ">
        <div
          style={{
            background:
              "linear-gradient(99deg, rgba(5, 32, 135) 2.16%, rgba(82, 110, 150, 0.00) 76.84%),lightgray",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "50vh",
          }}
        >
          <div className="flex flex-col h-full justify-center items-center">
            <h1 className="text-4xl font-bold text-center mb-6">
              Privacy Policy
            </h1>
          </div>
        </div>
        <div className="py-8 bg-white px-10 container mx-auto">
          <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>

          <p className="text-gray-600">
            At EliteAndAce Properties, we value the privacy of our users and
            clients. This Privacy Policy outlines how we collect, use, disclose,
            and protect your personal information. By using our services, you
            agree to the terms outlined in this policy.
          </p>

          <p className="text-gray-600 mt-4">
            <strong>Data Collection:</strong> We collect information necessary
            for the provision of our services. This may include personal
            information such as names, contact details, and other relevant data.
          </p>

          <p className="text-gray-600">
            <strong>Use of Information:</strong> The information collected is
            used for purposes such as providing our services, improving user
            experience, and ensuring the security of our systems.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">
            Information We Collect
          </h2>

          <p className="text-gray-600">
            We collect information that is necessary for the provision of our
            services. This may include personal information such as names,
            contact details, and other relevant data.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">
            How We Use Information
          </h2>

          <p className="text-gray-600">
            The information we collect is used for purposes such as providing
            our services, improving user experience, and ensuring the security
            of our systems.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">
            Information Sharing
          </h2>

          <p className="text-gray-600">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent. However, we may
            share information with trusted third parties who assist us in
            operating our website, conducting our business, or servicing you.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">Security</h2>

          <p className="text-gray-600">
            We implement security measures to maintain the safety of your
            personal information when you access our services. However, no
            method of transmission over the internet or electronic storage is
            100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">
            Changes to This Policy
          </h2>

          <p className="text-gray-600">
            EliteAndAce Properties reserves the right to update or change this
            Privacy Policy at any time. We will notify you of any changes by
            posting the new Privacy Policy on this page.
          </p>

          <p className="text-gray-600 mt-4">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:privacy@eliteandaceproperties.com"
              className="text-blue-500 underline"
            >
              privacy@eliteandaceproperties.com
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyAndPolicy;
