import React from "react";

const DateSlider = () => {
	return (
		<div className="flex">
			<div className="flex justify-between width-full">
				<p>Select day</p>
				<input type="date" placeholder="Choose Date" />
			</div>
		</div>
	);
};

export default DateSlider;
