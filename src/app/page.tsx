"use client";
import Location from "./components/Location";
import { useState } from "react";
import DateAndTime from "./components/DateAndTime";

export default function Home() {
	const [lastUpdatedStage, setLastUpdatedStage] = useState(0);
	return (
		<main>
			{/* <Location /> */}
			<DateAndTime />
		</main>
	);
}
