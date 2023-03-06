import { React, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Verify() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  const navigate = useNavigate()

  const handleOtpChange = (event, index) => {
    const value = event.target.value;
    if (value.length <= 1) {
      const otpCopy = [...otp];
      otpCopy[index] = value;
      setOtp(otpCopy);
      if (value !== '') {
        if (index === 3) {
          inputRefs.current[index].blur();
        } else {
          inputRefs.current[index + 1].focus();
        }
      }
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // perform OTP verification
    if (otp.join("").length != 4) {
      toast.error('Invalid OTP!')
    }
    else {
      console.log(`Verifying OTP: ${otp.join('')}`);
      toast.success('OTP verified')
      navigate('/dashboard')
    }
  };

  const handleResendOTP = () => {

    toast.success('OTP sent successfully!')
  };

  const handleUseAnotherNumber = () => {
    navigate('/')
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>OTP Verification</h1>
      <p>We have sent OTP to XXXX. Please enter the code received to verify.</p>
      <div className="otp-container">
        {otp.map((value, index) => (
          <input
            type="tel"
            key={index}
            value={value}
            onChange={(event) => handleOtpChange(event, index)}
            maxLength="1"
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </div>
      <div className="button-container">
        <button type="submit">Verify</button>
      </div>
      <p><a href="#" onClick={handleResendOTP}>Resend OTP</a></p>
      <p> <a href="#" onClick={handleUseAnotherNumber}>Use Another Number</a></p>
    </form>
  );
}
