import React from 'react'
import { useState } from "react"
import Nav from './Nav'
import SubmeBann from './SubmeBann'
import { useId } from 'react'
import { useFormik } from 'formik'
import * as yup from "yup";
import { useNavigate } from 'react-router-dom'
import { baseurl } from './Endpoint'
import axios
    from 'axios'
const Signin = () => {
    const id = useId()
    let receive = JSON.parse(localStorage.getItem("game"))
    const Navigate = useNavigate()
    const [userlogin, setuserlogin] = useState([])
    const [Error, setError] = useState("")
    const [email, setemail] = useState("")
    const [isloading, setisLoading] = useState(false)

    let lower = new RegExp(`(?=.*[a-z])`);

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
            setisLoading(true)
            let userdata = { email: values.email, password: values.password }
            axios.post(`${baseurl}signin`, userdata).then((credentials) => {
                setisLoading(true)
                if (credentials) {
                    let Err = credentials.data.message
                    console.log(Err);
                    if (Err == "Email already used") {
                        setError("Email is used")
                    }
                    else if (Err == "password already used") {
                        setError("Phone-Number is used")
                    } else {
                        Navigate('/signin')
                        setisLoading(false)
                    }

                }
            })
        },
        validationSchema: yup.object({
            email: yup.string()
                .required("This is field is required").min(5, "Must have at least 5 character").matches(lower, "Must be lowerCase letter"),
            fullname: yup.string()
                .required("This is field is required").min(5, "Must have at least 5 character"),
            password: yup.string().required("This is field is required").min(5, "Must have at least 10 character").min(6, "Must have at least 6 character"),
            phoneNumber: yup.string()
                .required("This is field is required").min(10, "Must have at least 10 character")
        })

    }
    )

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
                                    {formik.touched.email && (
                                        <div style={{ color: "red" }} className="ade">
                                            {formik.errors.email}
                                        </div>
                                    )}
                                    <div className='text-danger who'>{email}</div>
                                    <label htmlFor="" className='text-dark'>Password: </label>
                                    <input type="password" className="form-control" placeholder="Password" name='password' onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                    {formik.touched.password && (
                                        <div style={{ color: "red" }} className="ade">
                                            {formik.errors.password}
                                        </div>
                                    )}
                                    <input type="checkbox" name="check" className='mx-3' id={id} /><label htmlFor={id} className='mx-2 text-dark'>Remember Me</label>
                                    <button type='submit' disabled={isloading} className="btn btn-primary  btn-lg mx-3 mt-3">{isloading ? `processing` : "Register"}</button>
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