import React from 'react'
import { Link } from 'react-router-dom'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
const SubmeBann = () => {
    const [text] = useTypewriter({
        words: ['Hello', 'From', 'Typewriter', 'Hook!'],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })


    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 align-items-center">
                            <div className="text-center">
                                <h1 className="welcome ">Welcome to <span className='sub'>Subme</span></h1>
                                <h3 className="bring">
                                    Bringing the world closer to YOU
                                </h3>
                            </div>
                            <span>{text}</span>
                            <Cursor cursorColor='red' />
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="row justify-content-center">
                        <div className=" col-md-6 mx-4">
                            <div className=" col-md-10 my-4 text-center  nice">
                                <a className=" mx-5 text-uppercase  text-decoration-none  text-white started " >get started + &nbsp; &nbsp;
                                </a>
                                <Link to='/signin'><a className=" text-uppercase text-white start ">Login</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SubmeBann