"use client";
import { addresses } from "@/utils/constants";
import { useAppStore } from "@/utils/StoreProvider";
import { useEffect } from "react";

const Location = ({ handleStageChange }: stageProps) => {
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
		<div onClick={(e) => handleStageChange(1, e)}>
			<div className="flex">
				<div className="width-50">
					<h2 className="flex items-center text-gray text-times-new-roman lighter-font">
						<span
							className={
								lastUpdatedStage > 1 ? "section-number-dark" : "section-number"
							}
						>
							1
						</span>
						Location
					</h2>
					{currentStage === 1 && (
						<>
							<p className="text-gray light-font text-small width-50">
								Our specialists can come to collect labs at any location you
								choose, including homes and offices.
							</p>
							<div className="flex">
								<div className="width-70">
									<label className="text-small">
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
								<div className="margin-left-10">
									<label className="text-small">UNIT</label>
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
								className="background-gray text-smaller button-padding border-none text-white spaced-letters margin-tb-10"
								onClick={(e) => handleStageChange(2, e, true)}
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
