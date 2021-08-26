import { Component } from "react";
import './hero.css'
class heroImage extends Component{
    constructor(){
        super();
        this.state = {
            mainText: "Title of vertical gallery",
            subText: "Travel / August 21 2017"
        }
    }
    render(){
        return(
            <div className="container">
                <span id="mainText">{this.state.mainText}</span>
                <span id= "subText">{this.state.subText}</span>
            </div>
        )
    }
}

export default heroImage; 