import { timeSlots } from "@/utils/constants";
import { useAppStore } from "@/utils/StoreProvider";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Time = () => {
	const { selectedTimeSlot, setSelectedTimeSlot } = useAppStore(
		(state) => state
	);
	const currentTime = new Date().getHours();
	const isDisabled = (timeSlot: string) =>
		Number(timeSlot.split(" ")[0]) < currentTime;
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
						<AiOutlineThunderbolt />
					</div>
				))}
			</div>
		</section>
	);
};

export default Time;
