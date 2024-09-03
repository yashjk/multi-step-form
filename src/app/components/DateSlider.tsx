import { formatMonth, formatWeekDay, generateDates } from "@/utils/helpers";
import React, { useEffect, useState } from "react";

const DateSlider = ({
	today,
	date,
	handleDateChange,
}: DatePickerButtonProps) => {
	const dates = generateDates(today as Date);
	const [startIndex, setStartIndex] = useState(0);

	const handleNext = () => {
		if (startIndex + 4 < dates.length - 7) {
			setStartIndex(startIndex + 4);
		}
	};

	const handlePrev = () => {
		if (startIndex > 0) {
			setStartIndex(startIndex - 4);
		}
	};

	const isDateSelected = (singleDate: Date) => {
		return (
			singleDate.getDate() === date!.getDate() &&
			singleDate.getMonth() === date!.getMonth() &&
			singleDate.getFullYear() === date!.getFullYear()
		);
	};

	return (
		<div className="date-slider">
			<button
				className="arrow-button"
				onClick={handlePrev}
				disabled={startIndex === 0}
			>
				&lt;
			</button>
			<div className="dates-wrapper">
				<div
					className="dates-container"
					style={{
						transform: `translateX(-${startIndex * 30}%)`,
					}}
				>
					{dates.map((singleDate, index) => (
						<div
							key={index}
							className={`date-item ${
								isDateSelected(singleDate) ? "selected" : ""
							}`}
							onClick={() => handleDateChange(singleDate)}
						>
							<div className="flex items-center text-small">
								<p>{formatWeekDay(singleDate)}, </p>
								<p className="pl-5">{formatMonth(singleDate)}</p>
							</div>
							<p className="text-large">{singleDate.getDate()}</p>
							<span className="text-small">
								{formatWeekDay(singleDate) === "Sat" ||
								formatWeekDay(singleDate) === "Sun"
									? "Closed"
									: "$99"}
							</span>
						</div>
					))}
				</div>
			</div>
			<button
				className="arrow-button"
				onClick={handleNext}
				disabled={startIndex + 4 >= dates.length}
			>
				&gt;
			</button>
		</div>
	);
};

export default DateSlider;
