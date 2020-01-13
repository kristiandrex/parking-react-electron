import React from "react";
import "../styles/Toast.scss";

export default function Toast({ show, message }) {
	return (
		<div className={show ? "toast-container" : "toast-container hidden"}>
			<div className="toast">{message}</div>
		</div>
	);
}
