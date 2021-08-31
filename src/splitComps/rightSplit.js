import './rightSplit.css'
import TopImage from './../imgs/topimage.jpg'
import LowerImage from './../imgs/itemImage.jpg'
import { Link } from 'react-router-dom'
const RightSplit = ()=>{
    return(
        <div className="rightSplit">
            <div className="Advert">
                <p>Advertisement</p>
            </div>
            <div className="topPost">
                <h2>Top Posts</h2>
                <hr className="latestHr" />
                <img src={TopImage} alt="TopImage" />
                <Link to="/blog">
                <div className="topCard">
                    <h3>Catch waves with an adventure guide</h3>
                    <span className="Type">Travel</span> <span className="date"> /August 2017</span>
                    <span className="Number">1</span>
                </div>
                <hr className="cardHr" />
                <div className="lowerCards">

                    <img src={LowerImage} alt="LowerImage" />
                    <div className="textCard">
                        <h3>Catch waves with an adventure guide</h3>
                        <span className="Type">Travel</span> <span className="date"> /August 2017</span>
                    </div>
                    <span className="Number">2</span>
                </div>
                <hr className="cardHr" />
                <div className="lowerCards">

                    <img src={LowerImage} alt="LowerImage" />
                    <div className="textCard">
                        <h3>Catch waves with an adventure guide</h3>
                        <span className="Type">Travel</span> <span className="date"> /August 2017</span>
                    </div>
                    <span className="Number">3</span>
                </div>
                <hr className="cardHr" /> 
                <div className="lowerCards">

                    <img src={LowerImage} alt="LowerImage" />
                    <div className="textCard">
                        <h3>Catch waves with an adventure guide</h3>
                        <span className="Type">Travel</span> <span className="date"> /August 2017</span>
                    </div>
                    <span className="Number">4</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default RightSplit