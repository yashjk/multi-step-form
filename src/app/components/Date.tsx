import React, { MouseEvent, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

import DatePickerButton from "./DatePickerButton";
import DateSlider from "./DateSlider";

const Date = () => {
	const [date, setDate] = useState<Date | null>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};
	const handleDateChange = (date: Date | null) => {
		setDate(date);
		setIsOpen(false);
	};
	console.log(date, "Inside date");
	return (
		<div className="flex">
			<div className="flex-row width-full">
				<div className="flex justify-between width-full">
					<p>Select day</p>
					<button onClick={handleClick} className="date-picker-button">
						<FaCalendarAlt className="date-picker-icon" />
						<span>{date ? date.toLocaleDateString() : "Choose date"}</span>
					</button>
				</div>
				{isOpen && (
					<div className="relative width-full">
						<DatePickerButton date={date} handleDateChange={handleDateChange} />
					</div>
				)}
				<hr />
				<DateSlider date={date} handleDateChange={handleDateChange} />
			</div>
		</div>
	);
};

export default Date;
