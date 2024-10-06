import { useState } from "react";
import Input from "./Input";

// const educationEntryTemplate = 

export default function CollapsableEditSection({
    sectionTitle, inputs, onChange, onAdd, onDelete }) {
    const [editMode, setEditMode] = useState(false)
    // which item in the inputs array/object is being edited:
    const [editIndex, setEditIndex] = useState(null);

    function createButton(title, id) {
        return (
            <button
                onClick={(e) => {
                    e.preventDefault()
                    showEditBox(title, id)
                }}>{title}</button>
        )
    }

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
        onDelete(editIndex);

        setEditMode(false)
        setEditIndex(inputs.length - 1)
    }

    return (

        <>
            <form className={`${sectionTitle.toLowerCase()} edit-section`}>
                <h2>{sectionTitle}</h2>
                <ul className={`edit-mode-${editMode}`}>
                    {!editMode ?
                        inputs.length !== 0 ? (
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
                            })) : (
                            console.log(`${sectionTitle} has no entries to add to the page`)
                        ) :
                        Object.keys(inputs[0]).map((key) => {
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
                    }</ul>
                {!editMode ?
                    <button
                        className="form-button"
                        onClick={(e) => {
                            e.preventDefault()
                            addEntry()
                        }}>+</button> :
                    <div className="edit-buttons">
                        <button
                            className={'submit-button'}
                            onClick={(e) => {
                                e.preventDefault()
                                submitEdit()
                            }}>Submit</button>
                        <button
                            className={'delete-button'}
                            onClick={(e) => {
                                e.preventDefault()
                                deleteEntry()
                            }}>Delete</button>
                    </div>}

            </form >
        </>
    )
}