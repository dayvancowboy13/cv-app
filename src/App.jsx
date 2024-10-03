import { useState } from 'react'
import './App.css'
// import Input from './components/Input';
import EditSection from './components/EditSection';
import CollapsableEditSection from './components/CollapsableEditSection';


const initialEducation = [
  {
    id: 0,
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
  },
  {
    id: 1,
    school: {
      inputLabel: "School: ",
      id: "school",
      placeHolder: "UBC"
    },
    degree: {
      inputLabel: "Degree: ",
      id: "degree",
      placeHolder: "Bachelor of Science"
    },
    startDate: {
      inputLabel: "Start Date: ",
      id: "startDate",
      type: "date",
      value: "2019-09-01"
    },
    endDate: {
      inputLabel: "End date: ",
      id: "endDate",
      type: "date",
      value: "2023-05-01"
    },
    location: {
      inputLabel: "Location: ",
      id: "location",
      placeHolder: "Vancouver"
    },
  }
];

const initialExperience = [
  {
    id: 0,
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
  }];

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: {
      inputLabel: "Full Name: ",
      id: "name",
      placeHolder: "First and last name"
    },
    email: {
      inputLabel: "Email: ",
      id: "email",
      placeHolder: "email@domain",
      type: 'email'
    },
    phone: {
      inputLabel: "Phone: ",
      id: "phone",
      placeHolder: "555-555-5555",
      type: 'phone'
    },
    address: {
      inputLabel: "Address: ",
      id: "address",
      placeHolder: "City, State/Province"
    },
  });
  const [education, setEducation] = useState(initialEducation);
  const [experience, setExperience] = useState(initialExperience);

  function changePersonalDetails(id, text) {
    const detailsCopy = { ...personalDetails };
    detailsCopy[id]['value'] = text;

    setPersonalDetails(detailsCopy);
  }

  function changeEducationDetails(id, text, entryId) {
    const educationCopy = [...education];
    educationCopy[entryId][id].value = text;

    setEducation(educationCopy);
  }

  function changeExperienceDetails(id, text, entryId) {
    const experienceCopy = [...experience];
    experienceCopy[entryId][id].value = text;

    setExperience(experienceCopy);
  }

  function addEducationEntry(newIndex) {
    const newEntry = {
      id: newIndex,
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
      }
    }

    const educationCopy = [...education];
    educationCopy.push(newEntry);
    setEducation(educationCopy);

  }

  function addExperienceEntry(newIndex) {
    const newEntry = {
      id: newIndex,
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
    };



    const experienceCopy = [...experience];
    experienceCopy.push(newEntry);
    setExperience(experienceCopy);

  }

  return (
    <div id="app">
      <div className="edit-container container">
        <h2>Edit:</h2>
        <EditSection
          sectionTitle="Personal Details"
          inputs={personalDetails}
          onChange={changePersonalDetails} />
        <CollapsableEditSection
          sectionTitle="Education"
          inputs={education}
          onChange={changeEducationDetails}
          onAdd={addEducationEntry} />
        <CollapsableEditSection
          sectionTitle="Experience"
          inputs={experience}
          onChange={changeExperienceDetails}
          onAdd={addExperienceEntry} />
      </div>
      <div className="resume-container container">
        <h4>this is where the resume will be`&quot;`printed`&quot;`</h4>
        <p>Full name: {personalDetails.name.value}</p>
        <p>Email: {personalDetails.email.value}</p>
        <p>Phone: {personalDetails.phone.value}</p>
        <p>Address: {personalDetails.address.value}</p>

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

      </div>
    </div>
  )
}

export default App
