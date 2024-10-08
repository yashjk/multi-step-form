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
	const [isAddingPronoun, setIsAddingPronoun] = useState(false);

	const handlePronoun = () => setIsAddingPronoun(true);
	return (
		<div className="flex flex-col" onClick={(e) => handleStageChange(3)}>
			<div>
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
				{currentStage !== 3 &&
					firstName &&
					lastName &&
					phone &&
					email &&
					dob &&
					sex && (
						<div className="flex">
							<p className="text-gray light-font">{firstName}</p>
							<p className="text-gray light-font margin-left-10">{lastName}</p>
							<p className="text-gray light-font">, {phone}</p>
							<p className="text-gray light-font">, {email}</p>
							<p className="text-gray light-font">, {dob.toLocaleString()}</p>
							<p className="text-gray light-font">, {sex}</p>
							{pronoun && <p className="text-gray light-font">, {pronoun}</p>}
						</div>
					)}
				{currentStage === 3 && (
					<>
						<p className="text-gray light-font width-50">
							At the next step, you can select who you are booking for.
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
								className="background-gray text-smaller button-padding border-none text-white spaced-letters margin-t-30 margin-b-20"
								onClick={(e) => handleNextStage(4, e)}
							>
								CONTINUE
							</button>
						</form>
					</>
				)}
			</div>
			<hr className="text-gray width-full" />
		</div>
	);
};

export default Account;
