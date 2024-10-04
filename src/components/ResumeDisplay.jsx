import '../styles/ResumeDisplay.css'

export default function ResumeDisplay({ personalDetails, education, experience }) {


    return (
        <>
            <PersonalDetailsSection
                name={personalDetails.name.value}
                email={personalDetails.email.value}
                phone={personalDetails.phone.value}
                address={personalDetails.address.value}
            />


            {
                education.map((entry) => {
                    return (
                        <div classID='resume-education' key={entry.id}>
                            <h3 key={entry.school.value}>{entry.school.value}</h3>
                            <p key={entry.degree.value}><em key={entry.degree.value + "em"}>{entry.degree.value}</em></p>
                        </div>
                    )
                })}{
                experience.map((entry) => {
                    return (
                        <div classID='resume-experience' key={entry.id}>
                            <h3 key={entry.company.value}>{entry.company.value}</h3>
                            <p key={entry.position.value}><em key={entry.position.value + "em"}>{entry.position.value}</em></p>
                        </div>
                    )
                })

            }
        </>);
}

function PersonalDetailsSection({ name, email, phone, address }) {

    function getInitials(name) {
        const seperateName = name.split(' ')
        if (seperateName.length > 1) return seperateName[0][0] +
            (seperateName[1][0] !== undefined ? seperateName[1][0] : "");
        else return "";
    }


    return (
        <div className='resume-root'>
            <div className='header'>
                <div className='initials-container'>
                    <p>{name !== undefined ? getInitials(name) : null}</p>
                </div>
                <div className='info-container'>
                    <h1 className='resume name'>{name}</h1>
                    <div className='resume details'>
                        <span className='details-location'> {address}</span>
                        <span className='details-email'> {email}</span>
                        <span className='details-phone'> {phone}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}