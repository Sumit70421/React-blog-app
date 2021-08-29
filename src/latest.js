import { useState } from "react";
import cardImage from './imgs/cardImage.jpg'
import './css/latest.css'

const Latest = ()=>{
    
    const Card1Title = useState("Joshua Tree Overnight Adventure")
    const Card2Title = useState("Joshua Tree Overnight Adventure")
    const Card3Title = useState("Joshua Tree Overnight Adventure")
    const Card1Des = useState("Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces")
    const Card2Des = useState("Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces")
    const Card3Des = useState("Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces")
    const Card1Type = useState("Travel")
    const Card2Type = useState("Travel")
    const Card3Type = useState("Travel")
    const Card1Date = useState("August 21 2017")
    const Card2Date = useState("August 21 2017")
    const Card3Date = useState("August 21 2017")
    return(
        <div className="latest">
            <h2>The Latest</h2>
            <hr className="latestHr" />
            <div className="cards">
            <div className="card">
                    <img src={cardImage} alt="Traditional china"/>
                    <h3>{Card1Title}</h3>
                    <p>{Card1Des}</p>
                    <span className="Type">{Card1Type}</span> <span className="date"> /{Card1Date}</span>
                </div>
                <div className="card">
                    <img src={cardImage} alt="Traditional china"/>  
                    <h3>{Card2Title}</h3>
                    <p>{Card2Des}</p>
                    <span className="Type">{Card2Type}</span> <span className="date"> /{Card2Date}</span>
                </div>
                <div className="card">
                    <img src={cardImage} alt="Traditional china"/>
                    <h3>{Card3Title}</h3>
                    <p>{Card3Des}</p>
                    <span className="Type">{Card3Type}</span> <span className="date"> /{Card3Date}</span>
                </div>
            </div>
                
        </div>                                                                                                                                                                                                                                


    )
}

export default Latest; 
