"use client";
import { addresses } from "@/utils/constants";
import { useAppStore } from "@/utils/StoreProvider";
import { useEffect } from "react";

const Location = ({ handleStageChange, handleNextStage }: StageProps) => {
	const {
		address,
		unit,
		setAddress,
		setUnit,
		addressError,
		setAddressError,
		lastUpdatedStage,
		currentStage,
	} = useAppStore((state) => state);

	useEffect(() => {
		address && !addresses.includes(address)
			? setAddressError("Our Services are not available at your location")
			: setAddressError(null);
	}, [address, setAddressError]);

	return (
		<div onClick={() => handleStageChange(1)}>
			<div className="flex">
				<div className="width-75">
					<p className="flex items-center text-times-new-roman margin-b-30">
						<span
							className={
								lastUpdatedStage > 1 ? "section-number-dark" : "section-number"
							}
						>
							1
						</span>
						Location
					</p>
					{currentStage === 1 && (
						<>
							<p className="text-gray light-font width-50">
								Our specialists can come to collect labs at any location you
								choose, including homes and offices.
							</p>
							<div className="flex">
								<div className="width-75">
									<label className="text-small font-bold">
										ENTER FULL ADDRESS
										<span>*</span>
									</label>
									<input
										type="text"
										placeholder="Address"
										className="text-input"
										value={address || ""}
										onChange={(e) => setAddress(e.target.value)}
									/>
									{addressError && <p className="text-red">{addressError}</p>}
								</div>
								<div className="margin-left-20">
									<label className="text-small font-bold">UNIT</label>
									<input
										type="text"
										placeholder="Unit"
										className="text-input"
										value={unit || ""}
										onChange={(e) => setUnit(e.target.value)}
									/>
								</div>
							</div>
							<button
								disabled={!address && addressError ? true : false}
								className="background-gray text-smaller button-padding border-none text-white spaced-letters margin-t-30 margin-b-20"
								onClick={(e) => handleNextStage(2, e)}
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

export default Location;
