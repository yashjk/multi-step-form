import React from "react";
import Dates from "./Dates";
import Time from "./Time";
import { useAppStore } from "@/utils/StoreProvider";

const DateAndTime = ({ handleStageChange }: stageProps) => {
	const { date, selectedTimeSlot, currentStage, lastUpdatedStage } =
		useAppStore((state) => state);
	return (
		<div onClick={(e) => handleStageChange(2, e)}>
			<div className="flex">
				<div className="width-50">
					<h2 className="flex items-center text-gray text-times-new-roman lighter-font">
						<span
							className={
								lastUpdatedStage > 2 ? "section-number-dark" : "section-number"
							}
						>
							2
						</span>
						Time
					</h2>
					{currentStage === 2 && (
						<>
							<p className="text-gray light-font text-small width-50">
								We arrive during the time window you select and will be in and
								out in about 10 minutes.
							</p>
							<Dates />
							<Time />
							<button
								disabled={!date || !selectedTimeSlot ? true : false}
								className="background-gray text-smaller button-padding border-none text-white spaced-letters margin-tb-10"
								onClick={(e) => handleStageChange(3, e, true)}
							>
								CONTINUE
							</button>
						</>
					)}
					<hr className="text-gray" />
				</div>
			</div>
		</div>
	);
};

export default DateAndTime;
