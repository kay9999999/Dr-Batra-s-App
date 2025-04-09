import fs from "fs";
import axios from "axios";

// For JSON files in ES modules, Node requires an assertion.
import clinics from "../src/clinic.json" assert { tQype: "json" };

// Your Google Maps API Key
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY; // Replace with your API key

// Function to fetch latitude and longitude
const fetchLatLng = async (address) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json`,
      {
        params: {
          address: address,
          key: API_KEY,
        },
      }
    );

    const location = response.data.results[0]?.geometry.location;
    return location || null;
  } catch (error) {
    console.error(`Error fetching location for address: ${address}`, error);
    return null;
  }
};

// Main function to process the JSON
const addLatLngToClinics = async () => {
  for (let i = 0; i < clinics.length; i++) {
    const clinic = clinics[i];
    if (!clinic.latitude || !clinic.longitude) {
      console.log(`Fetching location for: ${clinic.address}`);
      const location = await fetchLatLng(clinic.address);

      if (location) {
        clinic.latitude = location.lat;
        clinic.longitude = location.lng;
        console.log(
          `Added lat/lng for ${clinic.address}: ${location.lat}, ${location.lng}`
        );
      } else {
        console.log(`Could not fetch location for: ${clinic.address}`);
      }

      // To avoid hitting API rate limits, add a delay (e.g., 1 second)
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  // Save the updated JSON back to a file
  fs.writeFileSync(
    "./src/clinic_with_latlng.json", // Save the updated file in the `src` folder
    JSON.stringify(clinics, null, 2),
    "utf-8"
  );
  console.log("Updated JSON saved to src/clinic_with_latlng.json");
};

// Run the script
addLatLngToClinics();
