function Display({personalInfoData, educationInfoData, workInfoData}) {
    return (
        <div>
            <div className="personalContainer">
                <h3>{personalInfoData.name}</h3>
                <p>{personalInfoData.email}</p>
                <p>Phone Number: {personalInfoData.phone}</p>
                <p>Address: {personalInfoData.address}</p>
                <hr />
            </div>
            <div className="educationContainer">
                <p>School: {educationInfoData.schoolName}</p>
                <p>Course: {educationInfoData.course}</p>
                <p>Course Start: {educationInfoData.startDate}</p>
                <p>Course End: {educationInfoData.endDate}</p>
                <hr />
            </div>
            <div className="workContainer">
                <p>Company Name: {workInfoData.companyName}</p>
                <p>Position Title: {workInfoData.positionTitle}</p>
                <p>Responsibilities: {workInfoData.responsibilities}</p>
                <p>Start Date: {workInfoData.startDate}</p>
                <p>End Date: {workInfoData.endDate}</p>
                <hr />
            </div>
        </div>
    )
}

export default Display;