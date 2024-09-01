import { generateDates } from "@/utils/helpers";
import React, { useState } from "react";

const DateSlider = ({ date, handleDateChange }: DatePickerButtonProps) => {
	const today = new Date();

	const dates = generateDates(today as Date);

	const isDateSelected = (date: Date) => {
		return (
			date.getDate() === date.getDate() &&
			date.getMonth() === date.getMonth() &&
			date.getFullYear() === date.getFullYear()
		);
	};

	return (
		<div className="date-slider">
			<button
				className="arrow-button"
				onClick={() => handleDateChange()}
				disabled={date <= today}
			>
				&lt;
			</button>
			<div className="dates-container">
				{dates.map((date, index) => (
					<div
						key={index}
						className={`date-item ${isDateSelected(date) ? "selected" : ""}`}
						onClick={() => handleDateChange()}
					>
						{date.toDateString()}
					</div>
				))}
			</div>
			<button
				className="arrow-button"
				onClick={() => handleDateChange()}
				disabled={date >= dates[dates.length - 1]}
			>
				&gt;
			</button>
		</div>
	);
};

export default DateSlider;
