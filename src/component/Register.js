import React from 'react'
import Nav from './Nav'
import SubmeBann from './SubmeBann'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseurl } from './Endpoint'
const Register = () => {
    const Navigate = useNavigate()
    const [isloading, setisLoading] = useState(false)
    const [Error, setError] = useState("")

    // let date = new Date().getDate()
    // let month = new Date().getMonth()
    // let year = new Date().getFullYear()
    // let time = new Date().toLocaleTimeString();
    // let DateCreated = `${(date)}-${(month)}-${(year)}-${(time)}`

    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);

    const Formik = useFormik({
        initialValues: {
            email: "",
            fullname: "",
            password: "",
            phoneNumber: "",
        },
        onSubmit: (values) => {
            setisLoading(true)
            let userdata = { email: values.email, fullname: values.fullname, password: values.password, phoneNumber: values.phoneNumber }
            axios.post(`${baseurl}register`, userdata).then((credentials) => {
                setisLoading(false)
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

    })
    return (
        <>
            <Nav />
            <SubmeBann />
            <div className="card  middle">
                <div className="card-body">
                    <div className="container">
                        <div className="form-group">
                            <div className="row justify-content-center">
                                <div className="col-md-9 mb-3">
                                    <div className='form-horizontal'>
                                        <form onSubmit={Formik.handleSubmit}>
                                            <label htmlFor="Email" className='col-md-4 col-form-label text-md-right text-dark my-2'>Email</label>
                                            <input type="text" className="form-control" placeholder="Email" name='email' onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                                            {Formik.touched.email && (
                                                <div style={{ color: "red" }} className="ade">
                                                    {Formik.errors.email}
                                                </div>
                                            )}
                                            <label htmlFor="Email" className=' text-md-right text-dark my-2'>Full Name</label>
                                            <input type="text" className="form-control my-3" name="fullname" placeholder="full Name" onBlur={Formik.handleBlur} onChange={Formik.handleChange} />
                                            {Formik.touched.fullname && (
                                                <div style={{ color: "red" }} className="ade">
                                                    {Formik.errors.fullname}
                                                </div>
                                            )}
                                            <label htmlFor="" className=' text-md-right text-dark  my-2 '>Phone Number</label>
                                            <input type="number" name="phoneNumber" className="form-control" placeholder="phoneNumber" onBlur={Formik.handleBlur} onChange={Formik.handleChange} />
                                            {Formik.touched.phoneNumber && (
                                                <div style={{ color: "red" }} className="ade">
                                                    {Formik.errors.phoneNumber}
                                                </div>
                                            )}

                                            <label htmlFor="Password" className=' text-md-right text-dark my-2'>Password</label>
                                            <input type="text" name="password" className="form-control" placeholder="password" onBlur={Formik.handleBlur} onChange={Formik.handleChange} />
                                            {Formik.touched.password && (
                                                <div style={{ color: "red" }} className="ade">
                                                    {Formik.errors.password}
                                                </div>
                                            )}
                                            <button type="submit" disabled={isloading} className="btn btn-primary  btn-lg mx-3 mt-3">{isloading ? " Processing... " : "Register"}</button><a className='btn btn-link fs-4 text-decoration-none'>
                                                {/* <button type="submit" className="btn  btn-lg btn-primary mt-4 fst-italic" disabled={isloading} style={{ background: " #00425f;" }}>{isloading ? " Processing... " : "Signup"}</button> */}
                                                <Link to='/signin'> Already Registered?</Link>
                                            </a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register