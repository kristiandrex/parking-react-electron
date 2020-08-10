import React from "react";

export default function Input({ prefix, type, label, id, value }) {
    return (
        <div className="input-field">
            <i className="material-icons prefix">{prefix}</i>
            <input type={type} id={id} name={id} defaultValue={value} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}