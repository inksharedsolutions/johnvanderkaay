import React from 'react'
import { Helmet } from 'react-helmet';

import Layout from '../components/layout'
import Nav from '../components/navigation'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../static/book/book.png'
import ParallaxBottom from '../components/parallax-bottom';

const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'dr-john-vanderkaay',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="About the Book | Dr. John Vanderkaay"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `The Surrender Paradox`,
                                spanFirst: `After war, disaster, and betrayal, is surrender an option?`,
                                imgSrc: Book1,
                                id: '',
                                content:
                                    `
                                        <p>
                                        The Surrender Paradox peels back the cover over Chaplain (Captain) John VanderKaay's experiences in war and Hurricane Katrina, his own struggle with post-traumatic stress disorder (PTSD), and the stigma against getting mental health help. Labeled as "crazy," he was told by superiors, "Good chaplains give help. They don't need help." He spiraled downward, and the blows just kept coming. After a miraculous encounter with God, he began to fight for those struggling with unseen wounds of war, helping change Department of Defense's policies concerning those needing mental help. Going from mere seconds from surrendering to despair and ending his life to the point of total surrender to God's grace, John learned that when you are overwhelmed by circumstances, surrender is the only way out. You cannot control everything and fight your way out alone. But who or what you surrender control to is of critical importance. Do you surrender control to the despair and hopelessness that seems to come from all directions and leads to death, or do you surrender control to the God who created you and wants to sustain you and give you life? Therein lies the surrender paradox. You must not surrender, but you must surrender!
                                        </p>
                                                
                                    `,

                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/true-crime-cases/',
                                    barnes: 'https://www.barnesandnoble.com/w/the-surrender-paradox-dr-john-vanderkaay/1138484882?ean=9781648952838',
                                    amazon: 'https://www.amazon.com/Surrender-Paradox-Disaster-Betrayal-Option-ebook/dp/B08QXP9M3J/ref=sr_1_1?dchild=1&keywords=9781648952838&qid=1608675691&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Surrender-Paradox-Disaster-Betrayal-Option/dp/1648952828/ref=sr_1_1?dchild=1&keywords=9781648952821&qid=1608675696&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/the-surrender-paradox-dr-john-vanderkaay/1138484882?ean=9781648952821',
                                    booksamillion: 'https://www.booksamillion.com/p/Surrender-Paradox/John-Vanderkaay/9781648952821?id=8049069540563&_ga=2.55456553.305266773.1616388239-2145380449.1604906972',
                                },
                            }}
                        />

                        {/* <ParallaxBottom /> */}

                        <div className="commentSection" >
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;