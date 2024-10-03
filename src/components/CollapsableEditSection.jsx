import { useState } from "react";
import Input from "./Input";

// const educationEntryTemplate = 

export default function CollapsableEditSection({
    sectionTitle, inputs, onChange, onAdd }) {
    const [editMode, setEditMode] = useState(false)
    // which item in the inputs array/object is being edited:
    const [editIndex, setEditIndex] = useState(null);
    const keys = Object.keys(inputs[0])

    function createButton(title, id) {
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

    function addEntry() {
        console.log("Adding Element to the inputs");
        onAdd(inputs.length);

        setEditMode(true);
        setEditIndex(inputs.length)
    }

    function deleteEntry() {
        console.log("delete the current entry");
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
                                        entry.school !== undefined ?
                                            entry.school.value !== undefined ? entry.school.value :
                                                entry.school.placeHolder :
                                            entry.company.value !== undefined ?
                                                entry.company.value
                                                : entry.company.placeHolder,
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
                                            elementId={inputs[editIndex][key].id}
                                            entryId={editIndex}
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
                                addEntry()
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
                                    deleteEntry()
                                }}>Delete</button>
                        </div>}
                </ul>
            </form >
        </>
    )
}