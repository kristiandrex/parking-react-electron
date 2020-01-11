import React from "react";
import "../css/Modal.css";

export default function Modal(props) {
	return (
		<div className="modal-overlay">
			<div className="modal">{props.children}</div>
		</div>
	);
}
