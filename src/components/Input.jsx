// import React, { useState } from "react";

export default function Input({
    type, value, label, placeHolder, onChange, elementId, entryId }) {
    return (
        <>
            <label htmlFor={label}>{label}</label>
            {type === 'textarea' ?
                <textarea
                    id={elementId}
                    placeholder={placeHolder}
                    rows={6}
                    onChange={(event) => onChange(elementId, event.target.value, entryId)} />
                : <input

                    pattern={type === 'tel' ? "[0-9]{3}-[0-9]{3}-[0-9]{4}" : null}
                    type={type === undefined ? 'text' : type}
                    value={value}
                    placeholder={placeHolder}
                    onChange={(event) => onChange(
                        elementId, event.target.value, entryId)} />
            }
        </>
    )
}