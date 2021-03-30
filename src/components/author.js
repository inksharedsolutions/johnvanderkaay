import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../static/author/Author-Photo.jpg'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    {/* <div className="grid-child" id="wrapper-heading-content">
                        <h1>About the<br /> Author</h1>
                    </div> */}

                    <div className="grid-child" id="author-contents">

                        <p data-aos="fade-up" data-aos-duration="2000">
                        Dr. VanderKaay has been a minister for 25+ years, having
                        served as Senior Pastor (civilian) and Senior Protestant Chaplain
                        (military), as well as a hospice and a mental health chaplain.
                        He was medically retired as Senior Protestant Chaplain in the
                        United States Air Force, having served countless temporary
                        duty assignments and a combat tour in Iraq. After retiring from
                        the military, Dr. VanderKaay earned his doctorate in marriage
                        and family counseling.
                        </p>

                        <h1 className="author-name-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <span>Dr. John</span>
                            <span>VanderKaay</span>
                        </h1>

                        <span className="author-tagline">Author & Writer</span>
                        <Link className="buttonLayouts" data-aos="fade-up" data-aos-duration="3000" to="/about-the-author">
                            Read More
                        </Link>
                    </div>
                    
                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} data-aos="fade-up" data-aos-duration="3000" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;