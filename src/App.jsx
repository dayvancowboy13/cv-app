import { useState } from 'react'
import './App.css'
import Input from './components/Input';
import EditSection from './components/EditSection';

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: {
      inputLabel: "Full Name: ",
      id: "full-name",
      placeHolder: "First and last name"

    },
    email: {
      inputLabel: "Email: ",
      id: "email",

    },
    phone: {
      inputLabel: "Phone: ",
      id: "phone",

    },
    address: {
      inputLabel: "Address: ",
      id: "address",

    },
  });
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: ""
  });
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: ""
  });

  function onChange() {
    console.log("Changing input");
  }


  return (
    <div id="app">
      <div id="edit-container">
        <h4>this is where the user will edit their resume</h4>
        <EditSection
          sectionTitle="Personal Details"
          inputs={personalDetails}
          onChange={onChange} />
        {/* <EditSection sectionTitle="Education" /> */}
        {/* <EditSection sectionTitle="Experience" /> */}
      </div>
      <div id="resume-container">
        <h4>this is where the resume will be "printed"</h4>

      </div>
    </div>
  )
}

export default App
