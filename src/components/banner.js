import React from 'react'
import { Link } from 'gatsby';

const Banner = () => {

    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="one-grid-columns">

                        <div className="grid-child-elem"></div>
                        <div className="grid-child-elem"></div>
                        
                        <div className="grid-child-elem">
                            <div className="banner-text">

                                <h1 data-aos="fade-up" data-aos-duration="2000" >
                                    <span>“I could wallow in my “victimhood,” or I could get help to overcome it.  Whether or not you are struggling because of your own choices or the choices of other people, you face the same choice.” </span>
                                </h1>

                                {/* <p className="right-sub-text" data-aos="fade-up" data-aos-duration="3000" >
                                    <span>Historical Milestone in Physics</span>
                                </p> */}

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;