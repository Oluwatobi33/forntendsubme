import React from 'react'
import Nav from './Nav'
import SubmeBann from './SubmeBann'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Register = () => {
    const [isloading, setisLoading] = useState(false)
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
                                        <label htmlFor="Email" className='col-md-4 col-form-label text-md-right text-dark'>Email</label>
                                        <input type="text" name="Email" className="form-control" placeholder="Email" />
                                        <label htmlFor="Email" className=' text-md-right text-dark'>Full Name</label>
                                        <input type="text" className="form-control my-3" name="fullname" placeholder="Full Name" />
                                        <label htmlFor="" className=' text-md-right text-dark '>Phone Number</label>
                                        <input type="text" name="phonenumber" className="form-control" placeholder="phonenumber" />
                                        <label htmlFor="Password" className=' text-md-right text-dark'>Password</label>
                                        <input type="text" name="phonenumber" className="form-control" placeholder="password" />
                                        <label htmlFor="Referrer (optional)" className=' text-md-right text-dark my-2'>Referrer (optional)</label>
                                        <input type="text" className="form-control my-3" name="optional" placeholder="Referrer (optional)" />
                                        <button type="submit" disabled={isloading} className="btn btn-primary  btn-lg mx-3 mt-3">{isloading ? " Processing... " : "Register"}</button><a className='btn btn-link fs-4 text-decoration-none'>
                                            {/* <button type="submit" className="btn  btn-lg btn-primary mt-4 fst-italic" disabled={isloading} style={{ background: " #00425f;" }}>{isloading ? " Processing... " : "Signup"}</button> */}
                                            <Link to='/signin'> Already Registered?</Link>
                                        </a>
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