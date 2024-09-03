"use client";
import Location from "./components/Location";
import DateAndTime from "./components/DateAndTime";
import { useAppStore } from "@/utils/StoreProvider";

export default function Home() {
	const {
		currentStage,
		setCurrentStage,
		lastUpdatedStage,
		setLastUpdatedStage,
	} = useAppStore((state) => state);
	const handleStageChange = (toSetStage: number, event, nextStage = false) => {
		event.stopPropagation();
		nextStage && setLastUpdatedStage(toSetStage);
		(lastUpdatedStage > toSetStage || lastUpdatedStage == toSetStage) &&
			setCurrentStage(toSetStage);
	};
	return (
		<main className="container">
			<Location handleStageChange={handleStageChange} />
			<DateAndTime handleStageChange={handleStageChange} />
		</main>
	);
}
