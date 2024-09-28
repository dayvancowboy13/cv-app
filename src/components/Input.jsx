import React, { useState } from "react";

export default function Input({ label, placeHolder, onChange }) {
    return (
        <>
            <label>{label}</label>
            <input
                placeholder={placeHolder}
                onChange={onChange} />
        </>
    )
}