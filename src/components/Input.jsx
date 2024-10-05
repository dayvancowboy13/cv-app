// import React, { useState } from "react";

export default function Input({
    type, value, label, placeHolder, onChange, elementId, entryId }) {
    return (
        <>
            <label>{label}</label>
            {type === 'textarea' ?
                <textarea
                    id={elementId}
                    placeholder={placeHolder}
                    rows={6}
                    onChange={(event) => onChange(elementId, event.target.value, entryId)} />
                : <input
                    type={type === undefined ? 'text' : type}
                    value={value}
                    placeholder={placeHolder}
                    onChange={(event) => onChange(
                        elementId, event.target.value, entryId)} />
            }
        </>
    )
}