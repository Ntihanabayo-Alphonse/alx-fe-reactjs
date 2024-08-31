import React, { useState } from 'react'

const RegistrationForm = () => {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState(false);

    // Handling the username change
    const handleUsername = (e) => {
        setName(e.target.value);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username) {
            setErrors(true)
            console.log(error)
        } else {
            setErrors(false)
        }

        if (!email) {
            setErrors(true)
            console.log(error)
        } else {
            setErrors(false)
        }
    
        if (!password) {
            setErrors(true)
            console.log(error)
        } else {
            setErrors(false)
        }
        console.log(username);
        console.log(email);
        console.log(password);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
            placeholder='Username'
            name='username'
            value={username}
            onChange={handleUsername}
        />
        <input type="email" 
            placeholder='Email'
            name='email'
            value={email}
            onChange={handleEmail}
        />
        <input type="password" 
            placeholder='Password'
            name='password'
            value={password}
            onChange={handlePassword}
        />
        <button type="submit">Submit</button>
    </form>
  )
}

export default RegistrationForm