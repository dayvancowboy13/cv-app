import React, { useState } from "react";

export default function Input({ type, value, label, placeHolder, onChange, id }) {
    return (
        <>
            <label>{label}</label>
            {type === 'textarea' ?
                <textarea
                    id={id}
                    onChange={(event) => onChange(id, event.target.value)} />
                : <input
                    type={type === undefined ? 'text' : type}
                    value={value}
                    placeholder={placeHolder}
                    onChange={(event) => onChange(id, event.target.value)} />
            }
        </>
    )
}