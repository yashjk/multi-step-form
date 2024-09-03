import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerButton = ({
	date,
	handleDateChange,
}: DatePickerButtonProps) => {
	return (
		<div className="date-picker-dropdown">
			<DatePicker
				selected={date}
				onChange={(date) => handleDateChange(date)}
				inline
			/>
		</div>
	);
};

export default DatePickerButton;
