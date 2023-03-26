import React from 'react'
import { useState } from "react"
import Nav from './Nav'
import SubmeBann from './SubmeBann'
import { useId } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
const Signin = () => {
    const id = useId()
    let receive = JSON.parse(localStorage.getItem("game"))
    const Navigate = useNavigate()
    const [userlogin, setuserlogin] = useState([])
    const [email, setemail] = useState("")
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: (values) => {
            let errors = {}
            if (values.email == "") {
                errors.email = "This field is required"
            }
            if (values.password == "") {
                errors.password = "This field is required"
            }

            return errors
        },
        onSubmit: (values) => {
            // console.log(values);
            receive.find((items) => {
                if (items.email == values.email && items.password == values.password) {
                    console.log(values);
                    setuserlogin(userlogin.push(values))
                    localStorage.login = JSON.stringify(userlogin)
                    Navigate('/quiz')
                    localStorage.currentUser = values.email
                    console.log(localStorage.login);
                }

            })
        }

    })

    return (
        <>
            <Nav />
            <SubmeBann />
            <div className="card  middle">


                <section className='section4'>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <form action="" onSubmit={formik.handleSubmit} className='ss' autoComplete='true'>
                                    <label htmlFor="" className='text-dark'>Email: </label>
                                    <input type="text" className="form-control " placeholder="Email" name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                    <div className='text-danger who'>{formik.errors.email}</div>
                                    <div className='text-danger who'>{email}</div>
                                    <label htmlFor="" className='text-dark'>Password: </label>
                                    <input type="password" className="form-control" placeholder="Password" name='password' onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                    <div className='text-danger who'>{formik.errors.password}</div>
                                    <input type="checkbox" name="check" className='mx-3' id={id} /><label htmlFor={id} className='mx-2 text-dark'>Remember Me</label>
                                    <button type='submit' className='btn btn-primary btn-lg btn-sm mt-2 px-5'>Signin</button>
                                    {/* <marquee behavior="" direction=""><h4 className='fw-bold text-white '>Login to start the contest </h4></marquee> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Signin