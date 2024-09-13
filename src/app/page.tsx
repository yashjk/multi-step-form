"use client";
import Location from "./components/Location";
import DateAndTime from "./components/DateAndTime";
import { useAppStore } from "@/utils/StoreProvider";
import Account from "./components/Account";
import LabOrder from "./components/LabOrder";
import PatientInformation from "./components/PatientInformation";
import PaymentInformation from "./components/PaymentInformation";
import Map from "./components/Map";

export default function Home() {
	const {
		currentStage,
		setCurrentStage,
		lastUpdatedStage,
		setLastUpdatedStage,
		address,
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
			<div className="width-75">
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
				<LabOrder
					handleStageChange={handleStageChange}
					handleNextStage={handleNextStage}
				/>
				<PatientInformation
					handleNextStage={handleNextStage}
					handleStageChange={handleStageChange}
				/>
				<PaymentInformation />
			</div>
			<div className="width-25 relative">
				<Map />
			</div>
		</main>
	);
}
