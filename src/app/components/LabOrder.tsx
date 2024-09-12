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
			{currentStage === 4 && (
				<>
					<div className="width-full">
						<div className="flex flex-col">
							<div className="flex items-center justify-between width-45">
								<label className="text-small">LAB NAME</label>
								{!labName && <p className="text-small text-red">Required *</p>}
							</div>
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
						<div className="flex items-center justify-between margin-t-30 width-45">
							<div className="flex items-center">
								<input
									type="radio"
									value="UNITY"
									onChange={(e) => setTestKit(e.target.value)}
									checked={testKit === "UNITY"}
									required
								/>
								<label className="margin-left-10 text-small">UNITY</label>
							</div>
							{!testKit && <p className="text-small text-red">Required *</p>}
						</div>
						<button
							disabled={!testKit && !labName ? true : false}
							className="background-gray text-smaller button-padding border-none text-white spaced-letters margin-t-30 margin-b-20"
							onClick={(e) => handleNextStage(5, e)}
						>
							CONTINUE
						</button>
					</div>
				</>
			)}
			<hr className="text-gray width-full" />
		</div>
	);
};

export default LabOrder;
