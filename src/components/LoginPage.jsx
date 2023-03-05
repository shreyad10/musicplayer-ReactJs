import { React, useState } from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";



export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <form onSubmit={handleFormSubmit}>
            <br/>
            <br/>
            <h1>Sign In</h1>
            <p>Please enter your mobile number for login. We will send an OTP to verify your number.</p>
            <br/>
            {/* <br /> */}
      <div className='react-tel-input'>
            <PhoneInput 
                country={"in"}
                value={phoneNumber}

                onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
            />
            </div>
            
            <button type="submit">Sign In</button>
        </form>
    )
}

