import { timeSlots } from "@/utils/constants";
import { useAppStore } from "@/utils/StoreProvider";
import React from "react";

const Time = () => {
	const { selectedTimeSlot, setSelectedTimeSlot } = useAppStore(
		(state) => state
	);
	const currentTime = new Date().getHours() + 3;
	const isDisabled = (timeSlot: string) =>
		Number(timeSlot.split(" ")[0]) < currentTime;
	return (
		<section className="flex flex-col">
			<p className="text-small">SELECT TIME</p>
			<div className="flex width-full height-auto flex-wrap">
				{timeSlots.map((timeSlot, i) => (
					<div
						className={`flex items-center border-1 width-45 ${
							i % 2 == 1 ? "timeslot-margin" : "margin-b-10"
						}`}
						key={`timeSlot-${i}`}
					>
						<input
							type="checkbox"
							disabled={isDisabled(timeSlot)}
							checked={selectedTimeSlot === timeSlot}
							className="checkbox-round margin-right-10"
							onClick={() => setSelectedTimeSlot(timeSlot)}
						/>
						<p className={isDisabled(timeSlot) ? "strikethrough" : ""}>
							{timeSlot}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Time;
