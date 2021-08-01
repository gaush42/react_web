import React from 'react';
import useForm from './useForm';
import ValidateInfo from './ValidateInfo';
import './Form.css';

const FormSignUp = ({submitForm}) => {
  const { handleChange, handleSubmit, values, errors } = 
  useForm(submitForm, ValidateInfo)

  return (
    <div className='form-content'>
      <form onSubmit={handleSubmit} className='form'>
        <h1>Create your New Account</h1>
        <div className='form-inputs'>
          <label htmlFor='username' 
          className='form-label'>
            Username
          </label>
          <input
            id='username' 
            type='text' 
            name='username' 
            className='form-input'
            placeholder='Enter User Name'
            value={values.username}
            onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='email' 
          className='form-label'>
            Email
          </label>
          <input
            id='email' 
            type='email' 
            name='email' 
            className='form-input'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='password' 
          className='form-label'>
            Password
          </label>
          <input
            id='password' 
            type='password' 
            name='password' 
            className='form-input'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='confirm_password' 
          className='form-label'>
            Re-Enter Password
          </label>
          <input
            id='confirm_password' 
            type='password' 
            name='confirm_password' 
            className='form-input'
            placeholder='Re-Enter your Password'
            value={values.confirm_password}
            onChange={handleChange}
            />
            {errors.confirm_password && <p>{errors.confirm_password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  )
}

export default FormSignUp

