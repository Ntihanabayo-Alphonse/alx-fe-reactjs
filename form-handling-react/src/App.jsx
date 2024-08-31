import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/FormikForm'

function App() {

  return (
    <>
    <h2>Registration Form</h2>
      <RegistrationForm />

      <h2>Formik Form</h2>
      <FormikForm />
    </>
  )
}

export default App