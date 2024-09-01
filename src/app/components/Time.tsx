import React from "react";
import DateSlider from "./DateSlider";

const Time = () => {
	return (
		<div className="container">
			<div className="flex">
				<div className="width-50">
					<h2 className="flex items-center text-gray text-times-new-roman lighter-font">
						<span className="section-number">2</span>
						Time
					</h2>
					<p className="text-gray light-font text-small width-50">
						We arrive during the time window you select and will be in and out
						in about 10 minutes.
					</p>

					<DateSlider />
				</div>
			</div>
		</div>
	);
};

export default Time;
