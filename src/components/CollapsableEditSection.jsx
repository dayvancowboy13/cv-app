import React, { useState } from "react";
import Input from "./Input";

export default function CollapsableEditSection({ sectionTitle, inputs, onChange }) {
    const [editMode, setEditMode] = useState(false)
    // which item in the inputs array/object is being edited:
    const [editIndex, setEditIndex] = useState(null);
    const keys = Object.keys(inputs[0])
    console.log("Inputs object: ");
    console.log(inputs);
    console.log("Keys: ");
    console.log(keys)

    function createButton(title, id) {
        console.log(title)
        return (
            <button
                onClick={(e) => {
                    e.preventDefault()
                    showEditBox(title, id)
                }}>{title}</button>
        )
    }

    // FOCUS ON GETTING MULTIPLE ITEMS TO SHOW UP AND USER CAN SELECT THEM
    // THEN WORK ON THE HIDING AND SHOWING PART OF IT

    function showEditBox(title, id) {
        console.log(`opening edit box for ${title} button`);

        setEditMode(true);
        setEditIndex(id);
    }

    function submitEdit() {
        console.log('saving changes to the edit');
        setEditMode(false);
        setEditIndex(null);
    }

    function addElement() {
        console.log("Adding Element to the inputs")
    }

    return (

        <>
            <form className={`${sectionTitle} edit-section`}>
                <h2>{sectionTitle}</h2>
                <ul>
                    {!editMode ?
                        inputs.map((entry) => {
                            return (
                                <li key={entry.id}>
                                    {createButton(
                                        entry.school !== undefined ? entry.school.placeHolder : entry.company.placeHolder,
                                        entry.id)}
                                </li>)
                        })
                        :

                        keys.map((key) => {
                            return (
                                key !== 'id' ?
                                    <li key={key}>
                                        <Input
                                            type={inputs[editIndex][key].type}
                                            value={inputs[editIndex][key].value !== undefined ? inputs[editIndex][key].value : ''}
                                            label={inputs[editIndex][key].inputLabel}
                                            placeHolder={inputs[editIndex][key].placeHolder}
                                            onChange={onChange}
                                            id={inputs[editIndex][key].id}
                                        />
                                    </li>
                                    : null

                            );
                        })
                    }
                    {!editMode ?
                        <button
                            className="form-button"
                            onClick={(e) => {
                                e.preventDefault()
                                addElement()
                            }}>+</button> :
                        <div className="edit-buttons">
                            <button
                                onClick={(e) => {
                                    e.preventDefault()
                                    submitEdit()
                                }}>Submit</button>
                            <button
                                onClick={(e) => {
                                    e.preventDefault()
                                    submitEdit()
                                }}>Delete</button>
                        </div>}
                </ul>
            </form >
        </>
    )
}