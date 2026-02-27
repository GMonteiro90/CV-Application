import { useState } from "react";

function EducationInfo({setData}) {
    const onSubmit = (event) => {
        event.preventDefault();
        setData({schoolName:event.target[0].value, course:event.target[1].value, startDate:event.target[2].value, endDate:event.target[3].value});
    }

    return (
        <div className="componentContainer">
            <h3>Education</h3>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <label htmlFor="schoolName">School Name:</label>
                    <input type="text" id="schoolName" placeholder="Please insert a school" required/>
                    <label htmlFor="course">Course:</label>
                    <input type="text" id="course" placeholder="Please insert your major" required/>
                    <label htmlFor="startDate">Starting Date:</label>
                    <input type="date" id="startDate" required />
                    <label htmlFor="endDate">Until:</label>
                    <input type="date" id="endDate" required />
                    <button type="submit">Update Education Info</button>
                </form>
            </div>
        </div>
    )
}

export default EducationInfo;