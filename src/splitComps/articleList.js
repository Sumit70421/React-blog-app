import { Component } from "react";
import './articleList.css'
import ItemImage from './../imgs/itemImage.jpg'
import Arrow from './../imgs/arrow.svg'
import { Link } from "react-router-dom";
class ArticleList extends Component{
    constructor(){
        super()
        this.state = {
            card1 : {
                title: "Catch waves with an adventure guide",
                description:"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
                type: "Travel",
                date: "August 21 2017"
            },
            card2 : {
                title: "Catch waves with an adventure guide",
                description:"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
                type: "Travel",
                date: "August 21 2017"
            },
            card3 : {
                title: "Catch waves with an adventure guide",
                description:"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
                type: "Travel",
                date: "August 21 2017"
            },
            card4 : {
                title: "Catch waves with an adventure guide",
                description:"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
                type: "Travel",
                date: "August 21 2017"
            }
        }
    }

    render(){
        return(
            <div className="arItems">
                <div className="listItem1">
                    <hr className="listHr" />
                    <Link to="/blog">
                    <div className="Item" >
                        <img src={ItemImage} alt="img" style={{width:"308px",height:"263px"}}className="itemImage"/>
                        <div className="text">
                            <h2 id="firstItem">{this.state.card1.title}</h2>
                            <p>{this.state.card1.description}</p>
                            <span className="Type">{this.state.card1.type}</span> <span className="date"> /{this.state.card1.date}</span>
                        </div>
                    </div>
                    <hr className="listHr" />
                    <div className="Item">
                        <img src={ItemImage} alt="img" className="itemImage"/>
                        <div className="text">
                            <h2 >{this.state.card2.title}</h2>
                            <p>{this.state.card2.description}</p>
                            <span className="Type">{this.state.card2.type}</span> <span className="date"> /{this.state.card2.date}</span>
                        </div>
                    </div>
                    <hr className="listHr" />
                    <div className="Item">
                        <img src={ItemImage} alt="img" className="itemImage"/>
                        <div className="text">
                            <h2>{this.state.card3.title}</h2>
                            <p>{this.state.card3.description}</p>
                            <span className="Type">{this.state.card3.type}</span> <span className="date"> /{this.state.card3.date}</span>
                        </div>
                    </div>
                    <hr className="listHr" />
                    <div className="Item">
                        <img src={ItemImage} alt="img" className="itemImage"/>
                        <div className="text">
                            <h2 >{this.state.card4.title}</h2>
                            <p>{this.state.card4.description}</p>
                            <span className="Type">{this.state.card4.type}</span> <span className="date"> /{this.state.card4.date}</span>
                        </div>
                    </div>
                    <div className="loadMore">
                        <img src={Arrow} id="svg" alt="downArrow"/> LOAD MORE
                    </div>
                    </Link>
                    <div className="masterImage">
                        <h2 >Title of vertical gallery</h2>
                        <p>Travel / August 2017</p>
                    </div>
                </div>
                
            </div>
        )
    }

}

export default ArticleList;