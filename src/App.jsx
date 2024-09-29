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
      id: "start-date",
      placeHolder: "Jan 1, 2020",
      type: "date"
    },
    endDate: {
      inputLabel: "End date: ",
      id: "end-date",
      placeHolder: "Apr 1, 2024",
      type: "date"
    },
    location: {
      inputLabel: "Location: ",
      id: "location",
      placeHolder: "University of Victoria"
    },
  });
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: ""
  });

  function changePersonalDetails(id, text) {
    const detailsCopy = { ...personalDetails };
    detailsCopy[id]['value'] = text;

    setPersonalDetails(detailsCopy);
  }

  return (
    <div id="app">
      <div className="edit-container container">
        <h4>this is where the user will edit their resume</h4>
        <EditSection
          sectionTitle="Personal Details"
          inputs={personalDetails}
          onChange={changePersonalDetails} />
        {/* <EditSection
          sectionTitle="Education"
          inputs={education}
          onChange={changePersonalDetails} /> */}
        {/* <EditSection sectionTitle="Experience" /> */}
      </div>
      <div className="resume-container container">
        <h4>this is where the resume will be "printed"</h4>
        <p>Full name: {personalDetails.name.value}</p>
        <p>Email: {personalDetails.email.value}</p>
        <p>Phone: {personalDetails.phone.value}</p>
        <p>Address: {personalDetails.address.value}</p>

      </div>
    </div>
  )
}

export default App
