import { useState } from "react";

function WorkInfo ({setData}) {
    const onSubmit = (event) => {
        event.preventDefault();
        setData({companyName:event.target[0].value, positionTitle:event.target[1].value, responsibilities: event.target[2].value, startDate:event.target[3].value, endDate:event.target[4].value});
    }
    
    return (
        <div className="componentContainer">
            <h3>Work Information</h3>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <label htmlFor="companyName">Company Name:</label>
                    <input type="text" id="companyName" placeholder="Please insert the Company Name" required />
                    <label htmlFor="positionTitle">Position Title</label>
                    <input type="text" id="positionTitle" placeholder="Please insert your postion" required />
                    <label htmlFor="responsibilities">Responsibilities</label>
                    <textarea id="responsibilities" rows={7} placeholder="Brief summary of your responsibilities(Máx. 500 char)" maxLength={500} required/>
                    <label htmlFor="startDate">Starting Date:</label>
                    <input type="date" id="startDate" required />
                    <label htmlFor="endDate">End Date:</label>
                    <input type="date" id="endDate" required />
                    <button type="submit">Update Work Information</button>
                </form>
            </div>
        </div>
    )
}

export default WorkInfo;