import React from 'react'
import { useFormik } from 'formik'

export default function Register() {
  let formik = useFormik({
    initialValues:{
      name: '',
      email: '',
      phone: '',
      password: '',
      rePassword: ''
    },
    onSubmit: (values) => console.log(values)
  })

  return (
    <div className='w-75 mx-auto py-5'>
      <h2 className='text-center'>Registration Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name :</label>
        <input type='text' onChange={formik.handleChange} value={formik.values.name} className='form-control my-2' name='name' id='name' />
        <label htmlFor='email'>Email :</label>
        <input onChange={formik.handleChange} type='text' value={formik.values.email} className='form-control my-2' name='email' id='email' />
        <label htmlFor='phone'>Phone :</label>
        <input onChange={formik.handleChange} type='phone' value={formik.values.phone} className='form-control my-2' name='phone' id='phone' />
        <label htmlFor='password'>Password :</label>
        <input onChange={formik.handleChange} type='password' value={formik.values.password} className='form-control my-2' name='password' id='password' />
        <label htmlFor='rePassword'>Re-enter Password :</label>
        <input onChange={formik.handleChange} type='password' value={formik.values.rePassword} className='form-control my-2' name='rePassword' id='rePassword' />
        <button className='text-white btn bg-main'> Submit </button>
      </form>
    </div>
  )
}
