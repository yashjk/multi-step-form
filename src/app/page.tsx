"use client";
import Location from "./components/Location";
import { useState } from "react";
import Time from "./components/Time";

export default function Home() {
	const [lastUpdatedStage, setLastUpdatedStage] = useState(0);
	return (
		<main>
			{/* <Location /> */}
			<Time />
		</main>
	);
}
