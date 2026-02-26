import { useState } from "react";

function EducationInfo({setData}) {
    const onSubmit = (event) => {
        event.preventDefault();
        setData({schoolName:event.target[0].value, course:event.target[1].value, date: event.target[2].value});
    }

    return (
        <>
            <h3>Education</h3>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <p>School Name</p><input type="text" placeholder="Please insert a school" required/>
                    <p>Course</p><input type="text" placeholder="Please insert your major" required/>
                    <p>Date</p><input type="date" required/>
                    <button type="submit">Update Education Info</button>
                </form>
            </div>
        </>
    )
}

export default EducationInfo;