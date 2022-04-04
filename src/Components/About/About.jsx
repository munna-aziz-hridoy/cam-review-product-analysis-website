import React from "react";
import aboutImg from "../../assests/image/about.png";
const About = () => {
  return (
    <div className="container mx-auto my-16">
      <h1 className="text-[#01acfa] text-center text-5xl font-bold">
        Want to know about us?
      </h1>
      <div className="md:flex mx-auto justify-center items-center gap-8 my-16">
        <div className="md:w-1/2">
          <p className="text-gray-500 text-lg">
            <span className="text-[#01acfa] font-semibold">We are here</span> to
            help you get some customer review for your product. This can be
            helpfull for choosing any product for your personal use. Sometime we
            bought something but it does not meet our requirement and then it
            feels like waste of money and time. <br /> But in this website you
            can find what product is suitable for you.
          </p>
          <button className="w-48 h-12 mx-auto bg-[#01acfa] hover:bg-transparent text-slate-100 hover:text-gray-600 transition font-semibold text-xl my-5 rounded-md shadow-md border-2 border-[#01acfa]">
            Learn more
          </button>
        </div>
        <div className="md:w-1/2 p-4 rounded-lg shadow-xl">
          <img src={aboutImg} alt="" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default About;
