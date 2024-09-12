import { useAppStore } from "@/utils/StoreProvider";
import React from "react";

const LabOrder = ({ handleNextStage, handleStageChange }: StageProps) => {
	const {
		lastUpdatedStage,
		currentStage,
		labName,
		setLabName,
		testKit,
		setTestKit,
	} = useAppStore((state) => state);
	return (
		<div className="flex flex-col" onClick={(e) => handleStageChange(4)}>
			<h2 className="flex items-center text-gray text-times-new-roman lighter-font">
				<span
					className={
						lastUpdatedStage > 4 ? "section-number-dark" : "section-number"
					}
				>
					4
				</span>
				Lab Order
			</h2>
			{currentStage === 2 && (
				<>
					<div className="width-full">
						<div className="flex flex-col">
							<label className="text-small">Lab Name</label>

							<select
								className="select-input"
								value={labName}
								required
								onChange={(e) => setLabName(e.target.value)}
							>
								<option value="" disabled>
									Select
								</option>
								<option value="Billion to one">Billion to one</option>
							</select>
						</div>
						{!labName && <p className="text-small text-red">Required *</p>}
						<div className="margin-t-30">
							<input
								type="radio"
								value="UNITY"
								onChange={(e) => setTestKit(e.target.value)}
								checked={testKit === "UNITY"}
								required
							/>
							<label>Unity</label>
						</div>
						{!testKit && (
							<p className="text-small text-red margin-t-30">Required *</p>
						)}
						<button
							disabled={!testKit && !labName ? true : false}
							className="background-gray text-smaller button-padding border-none text-white spaced-letters margin-t-30 margin-b-20"
							onClick={(e) => handleNextStage(2, e)}
						>
							CONTINUE
						</button>
					</div>
				</>
			)}
			<hr className="text-gray" />
		</div>
	);
};

export default LabOrder;
