import React from 'react'

const Happy = () => {
    return (
        <>
            <section className='section3'>
                <div className="container">
                    <div className="row  justify-content-center">
                        <div className="col-md-12 test text-center mb-5">
                            <h2 className='mb-4'>Testimonial</h2>
                            <h3><span>Join 1000+ happy customers today!</span></h3>
                        </div>
                    </div>
                </div>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active car">
                            <h3>Ahmed Ishiaku</h3>
                            <h4>Happy Client</h4>
                            <p>Special thanks to you for delivering on efficient service. A friend of mind recommended this platform to me and so far, I have not been disappointed. Keep the good work going and more grace.</p>
                        </div>
                        <div class="carousel-item car">
                            <h3>Ifeanyi Chimezie</h3>
                            <h4>Happy Client</h4>
                            <p>I am the type of person that celebrates a good thing when I see one. My experience here has been nothing but great. You have made for yourselves a lifetime customer.</p>
                        </div>
                        <div class="carousel-item car">
                            <h3>Ifeanyi Chimezie</h3>
                            <h4>Happy Client</h4>
                            <p>I never knew it was this easy to pay for my light bills and TV subscription. Whenever I remember the hassle I used to pass through just to make these payments made, I cannot help but thank you for the great job.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Happy