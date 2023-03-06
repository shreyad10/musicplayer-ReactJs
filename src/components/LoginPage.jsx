import { React, useState } from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate()

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (phoneNumber.length == 0 || phoneNumber.length != 12) {
            // console.log(phoneNumber.length)
            toast.success('Contact Number should have 10 digits')

        }
        else {
            sessionStorage.setItem('isloggedIn', true)
            navigate('/verify')
            console.log(sessionStorage.getItem('isloggedIn'))
        }

    };
    return (
        <form onSubmit={handleFormSubmit}>
            <br />
            <br />
            <h1>Sign In</h1>
            <p>Please enter your mobile number for login. We will send an OTP to verify your number.</p>
            <br />
            {/* <br /> */}
            <div className='react-tel-input'>
                <PhoneInput
                    country={"in"}
                    value={phoneNumber}

                    onChange={(phoneNumber) => {

                        setPhoneNumber(phoneNumber)
                    }}
                />
            </div>

            <button type="submit">Sign In</button>
        </form>
    )
}

