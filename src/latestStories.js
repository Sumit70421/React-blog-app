import './css/story.css'
import RightArrow from './imgs/rightArrow.svg'

const LatestStories = ()=>{
    return(
        <>
            <h2 id="story">Latest Stories</h2>
            <hr className="latestHr left" />
            <hr />
            <div className="stories">
                <div className="Story">
                    <h3>Catch waves with an adventure guide</h3>
                    <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t
                         more well-known as a tourist destination. It has a plethora of temples and palaces 
                         Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a
                        tourist destination. It has a plethora of temples and palaces
                    </p>
                    <span className="Type">Tech</span> <span className="date"> /Today at 11:54</span>
                </div>
                <hr className="hori" />
                <div className="Story">
                    <h3>Catch waves with an adventure guide</h3>
                    <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t
                         more well-known as a tourist destination. It has a plethora of temples and palaces 
                         Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a
                        tourist destination. It has a plethora of temples and palaces
                    </p>
                    <span className="Type">Tech</span> <span className="date"> /Today at 11:54</span>
                </div>
                <hr className="hori" />
                <div className="Story">
                    <h3>Catch waves with an adventure guide</h3>
                    <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t
                         more well-known as a tourist destination. It has a plethora of temples and palaces 
                         Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a
                        tourist destination. It has a plethora of temples and palaces
                    </p>
                    <span className="Type">Tech</span> <span className="date"> /Today at 11:54</span>
                </div>
            </div>
            <hr />
            <p id="View">VIEW MORE</p><img src={RightArrow} style={{width:"19px",height:"11px"}}/>
        </>
    )
}

export default LatestStories