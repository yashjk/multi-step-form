import React, { useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";

const PriorityModal = ({ closeModal }: PriorityModalProps) => {
	return (
		<div className="modal-container">
			<div className="modal-overlay">
				<div className="modal-content" onClick={(e) => e.stopPropagation()}>
					<AiOutlineThunderbolt />
					<h3>
						This is a priority slot. Do you have a copy of your lab order?
					</h3>
					<p className="text-gray">
						If you do not have your lab order, pick a later time and we will
						call your doctor to get your lab order.
					</p>
					<div className="modal-actions">
						<button onClick={() => closeModal()} className="yes-btn">
							Yes, Continue
						</button>
						<button onClick={() => closeModal(false)} className="no-btn">
							No, Pick Later Date
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PriorityModal;
