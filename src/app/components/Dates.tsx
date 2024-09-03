"use client";
import React, { MouseEvent, useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

import DatePickerButton from "./DatePickerButton";
import DateSlider from "./DateSlider";
import { useAppStore } from "@/utils/StoreProvider";

const Dates = () => {
	const { date, setDate } = useAppStore((state) => state);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const today = new Date();
	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};
	const handleDateChange = (date: Date) => {
		setDate(date);
		setIsOpen(false);
	};
	useEffect(() => {
		setDate(today);
	}, [!date]);
	return (
		<div className="flex">
			<div className="flex-row width-full">
				<div className="flex justify-between width-full">
					<p className="text-small">SELECT DAY</p>
					<button onClick={handleClick} className="date-picker-button">
						<FaCalendarAlt className="date-picker-icon" />
						<span className="text-small">Choose date</span>
					</button>
				</div>
				{isOpen && (
					<div className="relative width-full">
						<DatePickerButton date={date} handleDateChange={handleDateChange} />
					</div>
				)}
				<hr />
				{date && (
					<DateSlider
						today={today}
						date={date}
						handleDateChange={handleDateChange}
					/>
				)}
			</div>
		</div>
	);
};

export default Dates;
