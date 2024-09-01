import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerButton = ({
	startDate,
	handleDateChange,
}: DatePickerButtonProps) => {
	return (
		<div className="date-picker-dropdown">
			<DatePicker
				selected={startDate}
				onChange={() => handleDateChange()}
				inline
			/>
		</div>
	);
};

export default DatePickerButton;
