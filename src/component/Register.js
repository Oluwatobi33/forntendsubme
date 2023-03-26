import React from 'react'
import Nav from './Nav'
import SubmeBann from './SubmeBann'
const Register = () => {
    return (
        <>
            <Nav />
            <SubmeBann />
            <div className="container">
                <div className="row">
                    <div className="card-header">
                        Register
                    </div>
                </div>
            </div>
            <div className="card  middle">
                <div className="card-body">
                    <div className="container">
                        <div className="form-group">
                            <div className="row justify-content-center my-4">
                                <div className="col-md-9 mb-3">
                                    <div className='form-horizontal'>
                                        <label htmlFor="Email" className='col-md-4 col-form-label text-md-right text-dark'>Email</label>
                                        <input type="text" name="Email" className="form-control" placeholder="Email" />
                                        <label htmlFor="Email">Full Name</label>
                                        <input type="text" className="form-control my-3" name="fullname" placeholder="Full Name" />
                                        <label htmlFor="">Phone Number</label>
                                        <input type="text" name="phonenumber" className="form-control" placeholder="phonenumber" />
                                        <label htmlFor="Password">Password</label>
                                        <input type="text" name="phonenumber" className="form-control" placeholder="password" />
                                        <label htmlFor="Referrer (optional)">Referrer (optional)</label>
                                        <input type="text" className="form-control my-3" name="optional" placeholder="Referrer (optional)" />
                                        <button type="submit" className="btn btn-primary  mt-3">Send Message</button><a href="" className='btn btn-link'>
                                            Already Registered?
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