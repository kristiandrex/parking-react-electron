import React from "react";
import "./Modal.scss";

export default function Modal({ children }) {
	return (
		<div className="custom-modal-overlay">
			<div className="custom-modal z-depth-1">
				{children}
			</div>
		</div>
	);
}