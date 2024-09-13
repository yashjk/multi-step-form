import { useAppStore } from "@/utils/StoreProvider";
import React from "react";

const PatientInformation = ({
	handleNextStage,
	handleStageChange,
}: StageProps) => {
	const {
		firstName,
		lastName,
		phone,
		email,
		dob,
		sex,
		pronoun,
		address,
		unit,
		date,
		selectedTimeSlot,
		lastUpdatedStage,
		currentStage,
		labName,
		testKit,
	} = useAppStore((state) => state);
	return (
		<div className="flex" onClick={(e) => handleStageChange(3)}>
			<div className="width-full">
				<h2 className="flex items-center text-gray text-times-new-roman lighter-font">
					<span
						className={
							lastUpdatedStage > 3 ? "section-number-dark" : "section-number"
						}
					>
						5
					</span>
					Patient Information
				</h2>
				{currentStage === 5 && (
					<>
						<p className="text-gray light-font width-50">
							At the next step, you can select who you are booking for.
						</p>
						<div className="flex width-full flex-wrap padding-20">
							<div className="width-50">
								<label>FIRST NAME</label>
								<p className="light-font text-gray">{firstName}</p>
							</div>
							<div className="width-50">
								<label>LAST NAME</label>
								<p className="light-font text-gray">{lastName}</p>
							</div>
							<div className="flex flex-col width-50">
								<label>PHONE</label>
								<p className="light-font text-gray">{phone}</p>
							</div>
							<div className="flex flex-col width-50">
								<label>EMAIL</label>
								<p className="light-font text-gray">{email}</p>
							</div>
							<div className="flex flex-col width-50">
								<label>Date of Birth</label>
								<p className="light-font text-gray">{dob}</p>
							</div>
							<div className="flex flex-col width-50">
								<label>Sex</label>
								<p className="light-font text-gray">{sex}</p>
							</div>
							{pronoun && (
								<div className="flex flex-col width-50">
									<label>Preferred Pronoun</label>
									<p className="light-font text-gray">{pronoun}</p>
								</div>
							)}
							<div className="flex flex-col width-50">
								<label>Address</label>
								<p className="light-font text-gray">{address}</p>
							</div>
							{unit && (
								<div className="flex flex-col width-50">
									<label>Unit</label>
									<p className="light-font text-gray">{unit}</p>
								</div>
							)}
							<div className="flex flex-col width-50">
								<label>Appointment Date</label>
								<p className="light-font text-gray">
									{date?.toLocaleDateString() || ""}
								</p>
							</div>
							<div className="flex flex-col width-50">
								<label>Appointment Time</label>
								<p className="light-font text-gray">{selectedTimeSlot}</p>
							</div>
							<div className="flex flex-col width-50">
								<label>Lab Name</label>
								<p className="light-font text-gray">{labName}</p>
							</div>
							<div className="flex flex-col width-50">
								<label>Test Kit</label>
								<p className="light-font text-gray">{testKit}</p>
							</div>
							<button
								className="background-gray text-smaller button-padding border-none text-white spaced-letters margin-t-30 margin-b-20"
								onClick={(e) => handleNextStage(6, e)}
							>
								CONTINUE
							</button>
						</div>
					</>
				)}
				<hr className="text-gray" />
			</div>
		</div>
	);
};

export default PatientInformation;
