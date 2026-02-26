import React, { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import "./App.css";
import Display from "./components/Display";
import EducationInfo from "./components/EducationInfo";

function App () {
    const [personalInfoData, setPersonalInfoData] = useState({name: '', email: '', phone: '', address: ''});
    const [educationInfoData, setEducationInfoData] = useState({schoolName: '', course: '', date: ''});

    return (
        <div className="mainContainer">
            <div className="editContainer">
                <PersonalInfo setData ={setPersonalInfoData}/>
                <EducationInfo setData={setEducationInfoData}/>
            </div>
            <div className="displayContainer">
                <Display personalInfoData={personalInfoData} educationInfoData={educationInfoData}/>
            </div>
        </div>
    )

}

export default App;