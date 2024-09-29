import React, { useState } from "react";
import Input from "./Input";

export default function EditSection({ sectionTitle, inputs, onChange }) {

    // console.log("inputs for section " + sectionTitle)

    const keys = Object.keys(inputs)
    // console.log(key);
    // console.log(value);

    // for (let prop in inputs) {
    //     <p>{prop}</p>

    // console.log(keys)
    // keys.map((key) => {
    //     console.log(inputs[key]);
    // })


    // console.log(inputs)

    return (

        <>
            <h2>{sectionTitle}</h2>
            {/* <Input label="Full name: " />
            <Input label="Email: " /> */}
            <ul>
                {keys.map((key) => {
                    return <li key={key}>
                        <Input
                            type={inputs[key].type === undefined ? 'text' : inputs[key].type}
                            value={inputs[key].value !== undefined ? inputs[key].value : ''}
                            label={inputs[key].inputLabel}
                            placeHolder={inputs[key].placeHolder}
                            onChange={onChange}
                            id={inputs[key].id}
                        />
                    </li>
                })
                }
            </ul>
        </>
    )
}