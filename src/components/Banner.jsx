import React from "react";

const Banner = () => {
  return (
    <section className="bg-blue-50">
      <div className=" mx-auto px-4 py-10 md:py-16 flex flex-col md:flex-row items-center">
        {/* Left Side Content */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h3 className="text-blue-600 font-semibold mb-2 uppercase text-sm">
            Female Pattern Baldness Treatment For Women
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Know The Root Cause Of Your Baldness
          </h1>
          <p className="text-gray-700 mb-6">
            Restore your hair with advanced treatments at our leading clinic,
            offering expert care for natural, lasting results.
          </p>

          {/* Call to Action Button */}
          <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition mb-4">
            BOOK YOUR APPOINTMENT
          </button>

          {/* Offer Badge */}
          <div className="text-sm font-medium bg-yellow-300 inline-block px-3 py-2 rounded-md text-gray-800">
            20% OFF ON HAIR TREATMENT
          </div>

          {/* Stats row */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-gray-800">300+</span>
              <span className="text-gray-600 text-sm">Doctors Globally</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-gray-800">200+</span>
              <span className="text-gray-600 text-sm">Clinics Globally</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-gray-800">150k+</span>
              <span className="text-gray-600 text-sm">Happy Patients</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-gray-800">91%</span>
              <span className="text-gray-600 text-sm">Success Rate</span>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-6 flex items-center space-x-2">
            {/* Star Rating or an icon can be placed here */}
            <span className="text-yellow-500 text-xl">★★★★☆</span>
            <span className="text-gray-800 text-sm font-medium">
              4.8 (25,000+ reviews)
            </span>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/350x450?text=Doctor+Image"
            alt="Doctor"
            className="w-full max-w-sm object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
