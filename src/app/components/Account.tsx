import { useAppStore } from "@/utils/StoreProvider";
import React, { useState } from "react";

const Account = ({ handleNextStage, handleStageChange }: StageProps) => {
	const {
		lastUpdatedStage,
		currentStage,
		firstName,
		lastName,
		phone,
		email,
		dob,
		sex,
		pronoun,
		setFirstName,
		setLastName,
		setPhone,
		setEmail,
		setDob,
		setSex,
		setPronoun,
	} = useAppStore((state) => state);
	const [isModalOpen, setModalOpen] = useState(false);
	const [isAddingPronoun, setIsAddingPronoun] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);
	const handlePronoun = () => setIsAddingPronoun(true);
	return (
		<div className="flex" onClick={(e) => handleStageChange(3)}>
			<div className="width-75">
				<h2 className="flex items-center text-gray text-times-new-roman lighter-font">
					<span
						className={
							lastUpdatedStage > 3 ? "section-number-dark" : "section-number"
						}
					>
						3
					</span>
					Account
				</h2>
				{currentStage === 1 && (
					<>
						<p className="text-gray light-font text-small width-50">
							We arrive during the time window you select and will be in and out
							in about 10 minutes.
						</p>
						<form className="flex items-center width-full flex-wrap">
							<div className="flex flex-col width-45 padding-10">
								<label className="text-small">YOUR FIRST NAME*</label>
								<input
									type="text"
									className="account-input"
									placeholder="Your first name"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									required
								/>
							</div>
							<div className="flex flex-col width-45 padding-10 margin-left-10">
								<label className="text-small">YOUR LAST NAME*</label>
								<input
									type="text"
									className="account-input"
									placeholder="Your last name"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
									required
								/>
							</div>
							<div className="flex flex-col width-45 padding-10">
								<label className="text-small">YOUR MOBILE PHONE*</label>
								<input
									type="tel"
									className="account-input"
									placeholder="(000) 000-0000"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									required
								/>
							</div>
							<div className="flex flex-col width-45 padding-10 margin-left-10">
								<label className="text-small">YOUR EMAIL*</label>
								<input
									type="email"
									className="account-input"
									placeholder="Your email"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									required
								/>
							</div>
							<div className="flex flex-col width-45 padding-10">
								<label className="text-small">YOUR DATE OF BIRTH*</label>
								<input
									type="date"
									className="account-input"
									placeholder="(000) 000-0000"
									onChange={(e) => setDob(e.target.value)}
									value={dob}
									required
								/>
							</div>
							<div className="flex flex-col width-45 padding-10 margin-left-10">
								<div className="flex justify-between">
									<label className="text-small">SEX AT BIRTH*</label>
									<button
										className="text-small pronoun-button"
										onClick={() => handlePronoun()}
									>
										+ Add Pronouns
									</button>
								</div>
								<div className="flex width-full">
									<select
										className={
											isAddingPronoun ? "select-input" : "gender-input"
										}
										value={sex}
										onChange={(e) => setSex(e.target.value)}
										required
									>
										<option disabled>Select</option>
										<option value="female">Female</option>
										<option value="male">Male</option>
									</select>
									{isAddingPronoun ? (
										<input
											type="text"
											className="pronoun-input"
											value={pronoun}
											onChange={(e) => setPronoun(e.target.value)}
											placeholder="Pronouns"
										/>
									) : (
										<></>
									)}
								</div>
							</div>
							<button
								className="background-gray text-smaller button-padding border-none text-white spaced-letters margin-tb-10 margin-left-10"
								onClick={(e) => handleNextStage(4, e)}
							>
								CONTINUE
							</button>
						</form>
					</>
				)}
				<hr className="text-gray" />
			</div>
		</div>
	);
};

export default Account;
