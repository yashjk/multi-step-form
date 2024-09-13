import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useAppStore } from "@/utils/StoreProvider"; // Ensure this is properly imported from your store
import Image from "next/image";

const Map = () => {
	const { address } = useAppStore((state) => state); // Getting the address from the global store
	const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
	const [error, setError] = useState("");

	const containerStyle = {
		width: "200px",
		height: "200px",
	};

	// Get the Google Maps API key from environment variables
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

	useEffect(() => {
		// Function to fetch and update map based on the address
		const handleAddressChange = async () => {
			if (!address) return; // Don't proceed if the address is empty

			const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
				address
			)}&key=${apiKey}`;

			try {
				const response = await fetch(geocodeUrl);
				const data = await response.json();

				if (data.status === "OK") {
					const location = data.results[0].geometry.location;
					setMapCenter(location);
					setError(""); // Clear any previous error
				} else {
					setError("Address not found");
				}
			} catch (error) {
				console.error("Error fetching geocode:", error);
				setError("Error fetching address");
			}
		};

		handleAddressChange();
	}, [address, apiKey]);

	return (
		<div className="flex flex-col justify-center height-full padding-20">
			{error && <p style={{ color: "red" }}>{error}</p>}
			{!address ? (
				<Image
					src="/getlabs-employee-rebrand.png"
					alt="Placeholder"
					width="200"
					height="200"
				/>
			) : (
				<LoadScript googleMapsApiKey={apiKey}>
					<GoogleMap
						mapContainerStyle={containerStyle}
						center={mapCenter}
						zoom={15}
					>
						<Marker position={mapCenter} />
					</GoogleMap>
				</LoadScript>
			)}
			<div className="mapContainer">
				<p className="font-bold text-gray">Welcome to Getlabs</p>
				<p className="text-gray">
					Getlabs provides at-home lab collections nationwide.
				</p>
			</div>
		</div>
	);
};

export default Map;
