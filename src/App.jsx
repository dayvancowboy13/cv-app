import { useState } from 'react'
import './App.css'
import Input from './components/Input';
import EditSection from './components/EditSection';

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: {
      inputLabel: "Full Name: ",
      id: "name",
      placeHolder: "First and last name",
      value: "Chris"
    },
    email: {
      inputLabel: "Email: ",
      id: "email",
      placeHolder: "email@domain"
    },
    phone: {
      inputLabel: "Phone: ",
      id: "phone",
      placeHolder: "555-555-5555"
    },
    address: {
      inputLabel: "Address: ",
      id: "address",
      placeHolder: "City, State/Province"
    },
  });
  const [education, setEducation] = useState({
    school: {
      inputLabel: "School: ",
      id: "school",
      placeHolder: "University of Victoria"
    },
    degree: {
      inputLabel: "Degree: ",
      id: "degree",
      placeHolder: "Bachelor of Arts"
    },
    startDate: {
      inputLabel: "Start Date: ",
      id: "startDate",
      type: "date",
      value: "2009-09-01"
    },
    endDate: {
      inputLabel: "End date: ",
      id: "endDate",
      type: "date",
      value: "2013-05-01"
    },
    location: {
      inputLabel: "Location: ",
      id: "location",
      placeHolder: "Victoria"
    },
  });
  const [experience, setExperience] = useState({
    company: {
      inputLabel: "Company: ",
      id: "company",
      placeHolder: "Mega Corp"
    },
    position: {
      inputLabel: "Position: ",
      id: "position",
      placeHolder: "Lackey"
    },
    startDate: {
      inputLabel: "Start Date: ",
      id: "startDate",
      type: "date",
      value: "2009-09-01"
    },
    endDate: {
      inputLabel: "End date: ",
      id: "endDate",
      type: "date",
      value: "2013-05-01"
    },
    location: {
      inputLabel: "Location: ",
      id: "location",
      placeHolder: "Victoria"
    },
    description: {
      inputLabel: "Description: ",
      id: "description",
      type: "textarea",

    }
  });

  function changePersonalDetails(id, text) {
    const detailsCopy = { ...personalDetails };
    detailsCopy[id]['value'] = text;

    setPersonalDetails(detailsCopy);
  }

  function changeEducationDetails(id, text) {
    const educationCopy = { ...education };
    educationCopy[id].value = text;

    setEducation(educationCopy);
  }

  function changeExperienceDetails(id, text) {
    const experienceCopy = { ...experience };
    experienceCopy[id].value = text;

    setExperience(experienceCopy);
  }

  return (
    <div id="app">
      <div className="edit-container container">
        <h4>this is where the user will edit their resume</h4>
        <EditSection
          sectionTitle="Personal Details"
          inputs={personalDetails}
          onChange={changePersonalDetails} />
        <EditSection
          sectionTitle="Education"
          inputs={education}
          onChange={changeEducationDetails} />
        <EditSection
          sectionTitle="Experience"
          inputs={experience}
          onChange={changeExperienceDetails} />
      </div>
      <div className="resume-container container">
        <h4>this is where the resume will be "printed"</h4>
        <p>Full name: {personalDetails.name.value}</p>
        <p>Email: {personalDetails.email.value}</p>
        <p>Phone: {personalDetails.phone.value}</p>
        <p>Address: {personalDetails.address.value}</p>

        <p>School: {education.school.value}</p>
        <p>Degree: {education.degree.value}</p>
        <p>Start: {education.startDate.value}</p>
        <p>End: {education.endDate.value}</p>
        <p>Location: {education.location.value}</p>

        <p>Company: {experience.company.value}</p>
        <p>Position: {experience.position.value}</p>
        <p>Start: {experience.startDate.value}</p>
        <p>End: {experience.endDate.value}</p>
        <p>Location: {experience.location.value}</p>
        <p>Description: {experience.description.value}</p>

      </div>
    </div>
  )
}

export default App
