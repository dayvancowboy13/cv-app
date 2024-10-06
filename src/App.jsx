import { useState } from 'react'
import './App.css'
// import Input from './components/Input';
import EditSection from './components/EditSection';
import CollapsableEditSection from './components/CollapsableEditSection';
import ResumeDisplay from './components/ResumeDisplay';


const initialEducation = [
  {
    id: 0,
    school: {
      inputLabel: "School: ",
      id: "school",
      placeHolder: "University of Victoria",
      value: "University of Victoria"
    },
    degree: {
      inputLabel: "Degree: ",
      id: "degree",
      placeHolder: "Bachelor of Arts",
      value: "Bachelor of Arts"
    },
    subject: {
      inputLabel: "Subject: ",
      id: "subject",
      placeHolder: "English",
      value: "English"
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
      placeHolder: "Victoria, BC",
      value: "Victoria, BC"
    },
  }
];

const initialExperience = [
  {
    id: 0,
    company: {
      inputLabel: "Company: ",
      id: "company",
      placeHolder: "Mega Corp",
      value: "Mega Corp"
    },
    position: {
      inputLabel: "Position: ",
      id: "position",
      placeHolder: "Data Analyst",
      value: "Data Analyst"
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
      placeHolder: "Victoria, BC",
      value: "Victoria, BC"
    },
    description: {
      inputLabel: "Description: ",
      id: "description",
      placeHolder: "Describe the responsiblities and tasks involved...",
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
      type: 'tel'
    },
    address: {
      inputLabel: "Address/Location: ",
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
    // console.log(experienceCopy[entryId])
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
      subject: {
        inputLabel: "Subject: ",
        id: "subject",
        placeHolder: "English"
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

  function updateIds(array) {
    const len = array.length;

    for (let i = 0; i < len; i++) {
      array[i].id = i;
    }
  }

  function deleteEducationEntry(index) {
    // console.log("Calling delete education entry function");

    // console.log('the item being deleted is')
    // console.log(education[index].school)

    const educationCopy = [...education];
    educationCopy.splice(index, 1);
    updateIds(educationCopy);
    // console.log(educationCopy)
    setEducation(educationCopy);
  }

  function deleteExperienceEntry(index) {
    // console.log("Calling delete education entry function");

    // console.log('the item being deleted is')
    // console.log(education[index].school)

    const experienceCopy = [...experience];
    experienceCopy.splice(index, 1);
    updateIds(experienceCopy);
    // console.log(educationCopy)
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
          onAdd={addEducationEntry}
          onDelete={deleteEducationEntry} />
        <CollapsableEditSection
          sectionTitle="Experience"
          inputs={experience}
          onChange={changeExperienceDetails}
          onAdd={addExperienceEntry}
          onDelete={deleteExperienceEntry} />
      </div>
      <div className="resume-container container">
        <ResumeDisplay
          personalDetails={personalDetails}
          education={education}
          experience={experience} />

      </div>
    </div>
  )
}

export default App
