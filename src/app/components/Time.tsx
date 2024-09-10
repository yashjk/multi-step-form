import { timeSlots } from "@/utils/constants";
import { useAppStore } from "@/utils/StoreProvider";
import { useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import PriorityModal from "./PriorityModal";

const Time = () => {
	const {
		date,
		setDate,
		selectedTimeSlot,
		setSelectedTimeSlot,
		priority,
		setPriority,
	} = useAppStore((state) => state);
	const [isOpen, setIsOpen] = useState(false);

	const closeModal = (priority: boolean = true) => {
		if (priority) {
			setPriority(true);
		} else {
			const updatedDate = new Date(date);
			updatedDate.setDate(updatedDate.getDate() + 1);

			setDate(updatedDate);
			setSelectedTimeSlot(null);
		}
		setIsOpen(false);
	};

	const handleModal = (timeSlot: string) => {
		setSelectedTimeSlot(timeSlot);
		if (priority) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	};
	const currentTime = new Date().getHours();
	const isDisabled = (timeSlot: string) => {
		const today = new Date();
		const currentDate = new Date(date); // Assuming `date` is from the store

		// Remove time from the currentDate to only compare the date
		currentDate.setHours(0, 0, 0, 0);
		today.setHours(0, 0, 0, 0);

		// If the date is in the future, return false (not disabled)
		if (currentDate > today) {
			return false;
		}

		// If the date is today, check based on the time
		const currentTime = new Date().getHours();
		const selectedHour = Number(timeSlot.split(" ")[0]); // Assuming the timeSlot is in a format like "8 am"

		return selectedHour < currentTime; // Returns true if the selected timeSlot is in the past
	};

	return (
		<section className="flex flex-col">
			<p className="text-small font-bold">SELECT TIME</p>
			<div className="flex width-full height-auto flex-wrap">
				{timeSlots.map((timeSlot, i) => (
					<div
						className={`flex items-center border-1 width-45 justify-around padding-lr-10 ${
							i % 2 == 1 ? "timeslot-margin" : "margin-b-10"
						}`}
						key={`timeSlot-${i}`}
						onClick={() => handleModal(timeSlot)}
					>
						<input
							type="checkbox"
							disabled={isDisabled(timeSlot)}
							checked={selectedTimeSlot === timeSlot}
							className="checkbox-round margin-right-10"
						/>
						<p className={isDisabled(timeSlot) ? "strikethrough" : ""}>
							{timeSlot}
						</p>
						<AiOutlineThunderbolt />
						{isOpen && <PriorityModal closeModal={closeModal} />}
					</div>
				))}
			</div>
		</section>
	);
};

export default Time;
