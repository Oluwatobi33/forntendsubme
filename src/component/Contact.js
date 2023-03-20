import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="second bg-light shadow-md">
                    <div className="row my-5" id="contact">
                        <div className="col-md-3">
                            <div className="icon ink ">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="another mx-5">
                                <h4>Location:</h4>
                                <p>25,LONI STREET, OKITIPUPA<br /></p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="icon ink ">
                                <i className="bi bi-clock"></i>
                            </div>
                            <div className="another mx-5">
                                <h4>Open Hours:</h4>
                                <p>Monday-Saturday:<br />08:00 AM - 05:00 PM</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="icon ink ">
                                <i className="bi bi-envelope"></i>
                            </div>
                            <div className="another mx-5">
                                <h4>Email Address:</h4>
                                <p>emmauelayo@yahoo.com<br /></p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="icon ink">
                                <i className="bi bi-phone"></i>
                            </div>
                            <div className="another mx-5">
                                <h4>Call:</h4>
                                <p>+23408039753344<br />+2348157478411</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="form-group">
                    <div className="row justify-content-center my-4">
                        <div className="col-md-6 mb-3">
                            <input type="text" name="name" className="form-control " id="fname" placeholder="Your Name" />
                        </div>
                        <div className="col-md-6 ">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="row justify-content-center my-4">
                        <div className="col-md-12 text-center">
                            <input type="text" className="form-control mb-3" name="subject" id="subject" placeholder="Subject" />
                            <textarea className="form-control" name="area" rows="5" id="area" placeholder="Message"></textarea>
                            <div className="error44"></div>
                            <button type="submit" className="btn btn-danger  mt-3" onclick="send()">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact