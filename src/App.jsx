import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  // const [location, setLocation] = useState(null);
  // const [geoError, setGeoError] = useState(null);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         // Save the location (latitude and longitude) in state
  //         setLocation({
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //         });
  //         setGeoError(null);
  //       },
  //       (error) => {
  //         // If the user denies permission or an error occurs, capture the error
  //         setGeoError(error.message);
  //       }
  //     );
  //   } else {
  //     setGeoError("Geolocation is not supported by this browser.");
  //   }
  // }, []);

  return (
    <div>
      <Header />
      <main className="bg-white">
        <Routes>
          {/* Pass location and geoError as props to HomePage */}
          {/* <Route
            path="/"
            element={<HomePage location={location} geoError={geoError} />}
          /> */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
