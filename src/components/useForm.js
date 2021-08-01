import { useState, useEffect } from "react";
import './Form.css'

const useForm = (callback,ValidateInfo) => {
    const [values, setValues] = useState({
        username:'',
        email:'',
        password:'',
        confirm_password:''
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const { name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(ValidateInfo(values))
        setIsSubmitting(true);
    }
    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            callback()
          }
        },
        [errors]
      )

    return { handleChange, handleSubmit, values, errors }
}

export default useForm