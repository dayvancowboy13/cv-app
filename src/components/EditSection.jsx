import Input from "./Input";
import '../styles/EditSections.css'

export default function EditSection({ sectionTitle, inputs, onChange }) {
    const keys = Object.keys(inputs)

    return (

        <>
            <form className={`${sectionTitle.replace(' ', '-').toLowerCase()} edit-section`}>
                <h2>{sectionTitle}</h2>
                <ul>
                    {keys.map((key) => {
                        return <li key={key}>
                            <Input
                                type={inputs[key].type}
                                value={inputs[key].value !== undefined ? inputs[key].value : ''}
                                label={inputs[key].inputLabel}
                                placeHolder={inputs[key].placeHolder}
                                onChange={onChange}
                                elementId={inputs[key].id}
                            />
                        </li>
                    })
                    }
                </ul>
            </form >
        </>
    )
}