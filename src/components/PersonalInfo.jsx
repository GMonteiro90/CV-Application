import { useState } from "react";

function PersonalInfo () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    return (
        <>
            <h3>Personal Information</h3>
            <div className="container">
                <p>Name</p><input type="text" value={name} placeholder="Please insert your name" required onChange={(event) => setName(event.target.value)} />
                <p>Email</p><input type="email" value={email} placeholder="Please insert your email" required onChange={(event) => setEmail(event.target.value)}/>
                <p>Phone</p><input type="tel" placeholder="###-###-###" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required onChange={(event) => setPhone(event.target.value)}/>
                <p>Address</p><input type="text" placeholder="Some Adress" required onChange={(event) => setAddress(event.target.value)}/>
            </div>
        </>
    )
}

export default PersonalInfo;