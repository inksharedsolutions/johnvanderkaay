import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Nav from '../components/navigation';
import Banner from '../components/non-front-banner'
import AuthorImg from '../static/author/Author-Photo.jpg'

const Author = (props) => {
    return(
        <>
            <Layout>
                <Helmet title="About the Author | Dr. John Vanderkaay"/>
                <Nav pathExt={props.path}/>
                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile"/>
                            </div>

                            <div className="heading-quote">
                                <h4>
                                “I could wallow in my “victimhood,” or I could get help to overcome it.  Whether or not you are struggling because of your own choices or the choices of other people, you face the same choice.”
                                </h4>
                                <span className="ata-span-fx">
                                    Favorite Line from the Book
                                </span>
                            </div>

                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            Dr. VanderKaay has been a minister for 25+ years, having
                            served as Senior Pastor (civilian) and Senior Protestant Chaplain
                            (military), as well as a hospice and a mental health chaplain.
                            He was medically retired as Senior Protestant Chaplain in the
                            United States Air Force, having served countless temporary
                            duty assignments and a combat tour in Iraq. After retiring from
                            the military, Dr. VanderKaay earned his doctorate in marriage
                            and family counseling. He now leads, while also counseling,
                            coaching, and leading conflict resolution teams, at The Center for Mighty Marriages
                            & Families in Conroe, Texas. Settling down after 13 moves, he now lives outside
                            of Conroe, Texas, with his incredible wife of 25 years, Terri, and their five children;
                            Danielle, Lydia, Timothy, Stephen, & Nathanael.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Dr. John VanderKaay</span>
                                </span>
                            </p>

                        </article>

                    </section>
                </div>
            </Layout>
        </>
    )
}

export default Author;