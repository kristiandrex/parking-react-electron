import React from "react";
import "../css/Toast.css";

export default function Toast(props) {
	return (
		<div className={props.show ? "toast-container" : "toast-container hidden"}>
			<div className="toast">{props.message}</div>
		</div>
	);
}
