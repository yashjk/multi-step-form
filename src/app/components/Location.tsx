"use client";
import { addresses } from "@/utils/constants"; // Assuming addresses is an array of addresses
import { useAppStore } from "@/utils/StoreProvider";
import { useEffect, useMemo, useState, useCallback } from "react";
import { debounce } from "lodash";

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

	const [filteredAddresses, setFilteredAddresses] = useState<string[]>([]);

	const debouncedSetAddressError = useCallback(
		debounce((val: string) => {
			setAddressError(val);
		}, 500),
		[setAddressError]
	);

	useEffect(() => {
		if (address) {
			const filtered = addresses.filter((addr) =>
				addr.toLowerCase().includes(address.toLowerCase())
			);
			setFilteredAddresses(filtered);
		} else {
			setFilteredAddresses([]);
		}
	}, [address, setFilteredAddresses]);

	useEffect(() => {
		if (address && address.length > 0) {
			addresses.includes(address) && debouncedSetAddressError("");
		} else {
			debouncedSetAddressError(
				"Our Services are not available at your location"
			);
		}
	}, [address, debouncedSetAddressError]);

	const handleAddressSelect = (addr: string) => {
		setAddress(addr);
		setFilteredAddresses([]);
	};
	return (
		<div onClick={() => handleStageChange(1)}>
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
			{currentStage !== 1 && address && (
				<div className="flex">
					<p className="text-gray light-font">{address}</p>
					{unit && <p className="text-gray light-font">, {unit}</p>}
				</div>
			)}
			{currentStage === 1 && (
				<>
					<p className="text-gray light-font width-50">
						Our specialists can come to collect labs at any location you choose,
						including homes and offices.
					</p>
					<div className="flex">
						<div className="width-75 relative">
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
							{address && filteredAddresses.length > 0 && (
								<ul className="dropdown width-full">
									{filteredAddresses.map((addr, index) => (
										<li
											key={index}
											onClick={() => handleAddressSelect(addr)}
											className="dropdown-item"
										>
											{addr}
										</li>
									))}
								</ul>
							)}
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
			<hr className="text-gray width-full" />
		</div>
	);
};

export default Location;
