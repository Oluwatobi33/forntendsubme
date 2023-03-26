import React from 'react'
import Nav from './Nav'
import SubmeBann from './SubmeBann'
import { useId } from 'react'
const Login = () => {
    const id = useId()
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
                                        <label htmlFor="Password" className='mx-2 text-dark'>Password</label>
                                        <input type="text" name="Password" className="form-control" placeholder="Password" />
                                        <input type="checkbox" name="check" className='mx-3' id={id} /><label htmlFor={id} className='mx-2 text-dark'>Remember Me</label>
                                        <button type="submit" className="btn btn-primary btn-lg my-1 mx-5  mt-3">Login</button>
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

export default Login