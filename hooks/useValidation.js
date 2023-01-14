import React, { useEffect, useState } from 'react'

const useValidation = (initialState, validation, fn) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitForm, setSubmitForm] = useState(false)

  useEffect(() => {
    if (submitForm) {
      const safeForm = Object.keys(errors).length === 0

      if (safeForm) {
        fn()
      }
      setSubmitForm(false)
    }
  }, [errors])

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validation(values)

    setErrors(validationErrors)
    setSubmitForm(true)
  }

  return {
    values,
    errors,
    submitForm,
    handleChange,
    handleSubmit
  }
}

export default useValidation
