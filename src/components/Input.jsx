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
                    type={type === undefined ? 'text' : type}
                    maxLength={type === undefined ? '32' : type === 'email' ? '40' : '12'}
                    pattern={type === 'tel' ? "[0-9]{3}-[0-9]{3}-[0-9]{4}" : null}
                    value={value}
                    placeholder={placeHolder}
                    onChange={(event) => onChange(
                        elementId, event.target.value, entryId)} />
            }
        </>
    )
}