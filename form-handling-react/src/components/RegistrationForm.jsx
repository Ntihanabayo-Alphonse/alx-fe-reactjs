import React, { useState } from 'react'

const RegistrationForm = () => {
    const [formData, setFormData] = useState({username: '', email: '', password: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({...prevState, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
            placeholder='Username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
        />
        <input type="email" 
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
        />
        <input type="password" 
            placeholder='Password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
        />
        <button type="submit">Submit</button>
    </form>
  )
}

export default RegistrationForm