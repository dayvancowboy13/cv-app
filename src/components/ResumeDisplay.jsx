import '../styles/ResumeDisplay.css'

export default function ResumeDisplay({ personalDetails, education, experience }) {


    return (
        <div className='resume-root'>
            <PersonalDetailsSection
                name={personalDetails.name.value}
                email={personalDetails.email.value}
                phone={personalDetails.phone.value}
                address={personalDetails.address.value}
            />
            <EducationSection
                education={education}
            />
            <ExperienceSection
                experience={experience}
            />

            {
            }
        </div>);
}

function PersonalDetailsSection({ name, email, phone, address }) {

    function getInitials(name) {
        const seperateName = name.split(' ')
        if (seperateName.length > 1) return seperateName[0][0] +
            (seperateName[1][0] !== undefined ? seperateName[1][0] : "");
        else return "";
    }


    return (
        <div className='details-root'>
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

function EducationSection({ education }) {

    return (
        <div className='education-root'>
            <div className='education-side-bar'>
                <h3>EDUCATION</h3>
            </div>
            <div className='education-entries'>
                <ul>
                    {education.map((entry) => {
                        return (
                            <li key={entry.id}>
                                <div className='entry' key={entry.id}>
                                    <p className={'degree-date-container'} key={entry.degree.value}>
                                        <span>
                                            <span className='degree' key={entry.degree.value}>{entry.degree.value} </span>
                                            <span className='subject'>{entry.subject.value}</span>
                                        </span>
                                        <span className='education-dates'>
                                            {new Date(entry.startDate.value).getMonth()}/{new Date(entry.startDate.value).getFullYear()} to {new Date(entry.endDate.value).getMonth()}/{new Date(entry.endDate.value).getFullYear()}
                                        </span>
                                    </p>
                                    <p key={entry.school.value}><em>{entry.school.value}</em>, {entry.location.value}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

function ExperienceSection({ experience }) {
    return (
        <div className='experience-root'>
            <div className='experience-side-bar'>
                <h3>WORK HISTORY</h3>
            </div>
            <div className='experience-entries'>
                <ul>
                    {
                        experience.map((entry) => {
                            return (
                                <li key={entry.id}>
                                    <div classID='resume-experience' key={entry.id}>
                                        <p className='position-date-container' key={`${entry.id}-position-dates`}>
                                            <span className='position' key={entry.position.value}>{entry.position.value}</span>
                                            <span className='experience-dates'>
                                                {new Date(entry.startDate.value).getMonth()}/{new Date(entry.startDate.value).getFullYear()} to {new Date(entry.endDate.value).getMonth()}/{new Date(entry.endDate.value).getFullYear()}
                                            </span>
                                        </p>
                                        <p className='company-name-position' key={entry.company.value}>
                                            <span className='company-name'>{entry.company.value}</span>
                                            <span className='company-position'>{entry.location.value}</span>
                                        </p>
                                        <p className='work-description'>
                                            {entry.description.value}
                                        </p>
                                    </div>
                                </li>
                            )
                        })}
                </ul>
            </div>

        </div>
    )
}