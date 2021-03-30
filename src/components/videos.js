import React from "react"



const Video = () =>{
    return(
        <>
            <section className="book-trailer">
                <div className="grid-two-columns" id="trailer-body">
                    
                    <div className="grid-child-content">
                        <h5>Dr. John VanderKaay</h5>

                        <h1>
                            <span>Book</span>
                            <span>Trailer</span>
                        </h1>
                        
                        <p>
                           Will you choose Surrender as an option after experiencing war, disaster and betrayal ?
                           Click the play button, then watch and learn.
                        </p>

                    </div>

                    <div className="grid-video-container">
                        <div className="player-wrapper">
                            {/* <ReactPlayer
                                className="react-player"
                                url={"https://www.youtube.com/embed/head6m6ucO0"}
                                width="100%"
                                height="400px"
                                controls={true}
                                playIcon
                            /> */}
                            <iframe 
                                width="100%" 
                                height="400" 
                                src="https://www.youtube.com/embed/head6m6ucO0" 
                                title="The Surrender Paradox" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                
                </div> 
            </section>
        </>
    )
}

export default Video;