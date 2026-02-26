import { useState } from "react";

function PersonalInfo ({setData}) {
    const onSubmit = (event) => {
        event.preventDefault();
        setData({name:event.target[0].value, email:event.target[1].value, phone: event.target[2].value, address:event.target[3].value});
    }

    return (
        <>
            <h3>Personal Information</h3>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <p>Name</p><input type="text" placeholder="Please insert your name" required />
                    <p>Email</p><input type="email" placeholder="Please insert your email" required />
                    <p>Phone</p><input type="tel" placeholder="#########" pattern="[0-9]{9}" required max={9} />
                    <p>Address</p><input type="text" placeholder="Some Adress" required />
                    <button type="submit">Update Personal Info</button>
                </form>
            </div>
        </>
    )
};

export default PersonalInfo;