import React from "react";
import "../styles/Modal.scss";

export default function Modal(props) {
	return (
		<div className="modal-overlay">
			<div className="modal">{props.children}</div>
		</div>
	);
}
