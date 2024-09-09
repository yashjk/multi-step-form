"use client";
import Location from "./components/Location";
import DateAndTime from "./components/DateAndTime";
import { useAppStore } from "@/utils/StoreProvider";
import Account from "./components/Account";

export default function Home() {
	const {
		currentStage,
		setCurrentStage,
		lastUpdatedStage,
		setLastUpdatedStage,
	} = useAppStore((state) => state);

	const handleNextStage = (
		toSetStage: number,
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.stopPropagation();
		setLastUpdatedStage(toSetStage);
		setCurrentStage(toSetStage);
	};

	const handleStageChange = (toSetStage: number) => {
		(lastUpdatedStage > toSetStage || lastUpdatedStage == toSetStage) &&
			setCurrentStage(toSetStage);
	};

	return (
		<main className="container">
			<Location
				handleStageChange={handleStageChange}
				handleNextStage={handleNextStage}
			/>
			<DateAndTime
				handleStageChange={handleStageChange}
				handleNextStage={handleNextStage}
			/>
			<Account
				handleStageChange={handleStageChange}
				handleNextStage={handleNextStage}
			/>
		</main>
	);
}
