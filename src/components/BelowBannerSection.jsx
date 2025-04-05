import React from "react";

const BelowBannerSection = () => {
  return (
    <section className="bg-white py-10">
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {/* Card 1 */}
          <div className="p-6 border rounded-md shadow-sm">
            <h4 className="text-2xl font-bold text-blue-600 mb-2">85%</h4>
            <p className="text-gray-700">Hair Growth</p>
          </div>

          {/* Card 2 */}
          <div className="p-6 border rounded-md shadow-sm">
            <h4 className="text-2xl font-bold text-blue-600 mb-2">88%</h4>
            <p className="text-gray-700">Better Hair Volume</p>
          </div>

          {/* Card 3 */}
          <div className="p-6 border rounded-md shadow-sm">
            <h4 className="text-2xl font-bold text-blue-600 mb-2">86%</h4>
            <p className="text-gray-700">Hair Thickness</p>
          </div>

          {/* Card 4 */}
          <div className="p-6 border rounded-md shadow-sm">
            <h4 className="text-2xl font-bold text-blue-600 mb-2">90%</h4>
            <p className="text-gray-700">Reduction in Hair Fall</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BelowBannerSection;
