"use client";
import { addresses } from "@/utils/address";
import { useAppStore } from "@/utils/StoreProvider";
import Error from "next/error";
import { useEffect, useState } from "react";

const Location = () => {
	const { address, unit, setAddress, setUnit, addressError, setAddressError } =
		useAppStore((state) => state);
	useEffect(() => {
		address && !addresses.includes(address)
			? setAddressError("Our Services are not available at your location")
			: setAddressError(null);
	}, [address, setAddressError]);
	return (
		<div className="container">
			<div className="flex">
				<div className="width-50">
					<h2 className="flex items-center text-gray text-times-new-roman lighter-font">
						<span className="section-number">1</span>
						Location
					</h2>
					<p className="text-gray light-font text-small width-50">
						Our specialists can come to collect labs at any location you choose,
						including homes and offices.
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
						disabled={addressError}
						className="background-gray text-smaller button-padding border-none text-white spaced-letters margin-tb-10"
					>
						CONTINUE
					</button>
					<hr className="text-gray" />
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Location;
