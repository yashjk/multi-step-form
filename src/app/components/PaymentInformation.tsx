import { useAppStore } from "@/utils/StoreProvider";
import { useState } from "react";

const PaymentInformation = () => {
	const { currentStage, firstName, lastName, date, selectedTimeSlot } =
		useAppStore((state) => state);
	const [isLoading, setIsLoading] = useState(false);
	const [isPaymentComplete, setIsPaymentComplete] = useState(false);

	const [cardNumber, setCardNumber] = useState("");
	const [expiry, setExpiry] = useState("");
	const [cvv, setCvv] = useState("");

	const handlePayment = () => {
		// Basic validation check
		if (!cardNumber || !expiry || !cvv) {
			alert("Please enter all payment details");
			return;
		}

		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			setIsPaymentComplete(true);
		}, 3000); // Show loader for 3 seconds
	};

	return (
		<div className="flex flex-col">
			<h2 className="flex items-center text-gray text-times-new-roman lighter-font">
				<span className="section-number">6</span> Payment
			</h2>

			{!isPaymentComplete && isLoading && (
				<p className="text-gray">Loading...</p>
			)}
			{!isPaymentComplete && !isLoading && (
				<>
					<p className="text-gray">
						{firstName} {lastName}
					</p>
					<p className="text-gray">
						{date?.toLocaleDateString()} {selectedTimeSlot}
					</p>
					<p className="text-gray">Price: $99</p>
					<div className="mock-card border p-4 my-4 rounded shadow-lg">
						<h3 className="text-lg font-semibold mb-2">Payment</h3>
						<p className="text-sm mb-1">
							Card Number: {cardNumber || "**** **** **** 1234"}
						</p>
						<p className="text-sm mb-1">Expiry: {expiry || "MM/YY"}</p>
						<p className="text-sm">CVV: {cvv || "***"}</p>
					</div>

					<div className="payment-form border p-4 my-4 rounded shadow-md">
						<div className="flex flex-col justify-between width-50 margin-t-10">
							<label className="block my-2">Card Number:</label>
							<input
								type="text"
								value={cardNumber}
								onChange={(e) => setCardNumber(e.target.value)}
								placeholder="Enter card number"
								className="border p-2 rounded w-full padding-10"
							/>
						</div>
						<div className="flex flex-col justify-between width-50 margin-t-10">
							<label className="block my-2">Expiry Date:</label>
							<input
								type="date"
								value={expiry}
								onChange={(e) => setExpiry(e.target.value)}
								placeholder="MM/YY"
								className="border p-2 rounded w-full padding-10"
							/>
						</div>
						<div className="flex flex-col justify-between width-50 margin-t-10">
							<label className="block my-2">CVV:</label>
							<input
								type="text"
								value={cvv}
								onChange={(e) => setCvv(e.target.value)}
								placeholder="Enter CVV"
								maxLength={3}
								className="border p-2 rounded w-full padding-10"
							/>
						</div>
					</div>

					<button
						onClick={handlePayment}
						className="background-gray text-smaller button-padding border-none text-white spaced-letters margin-t-30 margin-b-20"
					>
						Complete Payment
					</button>

					{isLoading && <p>Loading...</p>}
				</>
			)}
			{isPaymentComplete && (
				<p className="text-green-500 text-lg">
					Thank you for booking your appointment!
				</p>
			)}
		</div>
	);
};

export default PaymentInformation;
