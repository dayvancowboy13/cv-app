import React, { useState } from "react";

export default function Input({ type, value, label, placeHolder, onChange, id }) {
    return (
        <>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                placeholder={placeHolder}
                onChange={(event) => onChange(id, event.target.value)} />
        </>
    )
}