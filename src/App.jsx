import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Display from "./components/Display";
import EducationInfo from "./components/EducationInfo";
import WorkInfo from "./components/WorkInfo";

function App() {
  const [personalInfoData, setPersonalInfoData] = useState({
    name: "Gonçalo",
    email: "samplemail@mail.com",
    phone: "123123123",
    address: "SampleAddress",
  });
  const [educationInfoData, setEducationInfoData] = useState({
    schoolName: "SampleSchool",
    course: "SampleCourse",
    startDate: "1999-10-10",
    endDate: "2000-10-10",
  });
  const [workInfoData, setWorkInfoData] = useState({
    companyName: "SampleCompany",
    positionTitle: "SamplePosition",
    responsibilities: "SampleResponsibilities",
    startDate: "1999-10-10",
    endDate: "2000-10-10",
  });
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="mainContainer">
      <h1>CV Generator</h1>
      <div className="contentContainer">
        <button onClick={() => setEditMode(!editMode)}>Edit</button>
        <div className="editContainer">
          <PersonalInfo setData={setPersonalInfoData} editMode={editMode}/>
          <EducationInfo setData={setEducationInfoData} editMode={editMode}/>
          <WorkInfo setData={setWorkInfoData} editMode={editMode}/>
        </div>
        <div className="displayContainer">
          <Display
            personalInfoData={personalInfoData}
            educationInfoData={educationInfoData}
            workInfoData={workInfoData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
