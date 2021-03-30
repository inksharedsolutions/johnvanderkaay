import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../static/book/book.png'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books" >

                        <div className="book-wraps" >
                            <img src={FrontBook} data-aos="fade-up" data-aos-duration="3000" alt="book-cover"/>
                        </div>

                        <div className="content-wraps">

                            {/* <span className="italic-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                Read, listen, and learn in various formats
                            </span> */}

                            <h1 className="heading--featured" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p data-aos="fade-up" data-aos-duration="2000">
                            The Surrender Paradox peels back the cover over Chaplain (Captain) John VanderKaay's experiences in war and Hurricane Katrina, his own struggle with post-traumatic stress disorder (PTSD), and the stigma against getting mental health help. Labeled as "crazy," he was told by superiors, "Good chaplains give help. They don't need help." He spiraled downward, and the blows just kept coming. After a miraculous encounter with God, he began to fight for those struggling with unseen wounds of war, helping change Department of Defense's policies concerning those needing mental help.
                            </p>
{/* 
                            <a 
                                href="https://ft.fornux.com/files/pdf/Finite_Theory.pdf"
                                rel="noopener noreferrer" target="_blank"
                                className="dl-link" download>
                                Download Manuscript
                            </a>
                             */}
                            <br />

                            <button className="btn-book-featured" data-aos="fade-up" data-aos-duration="3000">
                                <Link to="/about-the-book">
                                    Read More
                                </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook