import { Component } from "react";
import './hero.css'
import axios from 'axios'
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
    componentDidMount(){
        axios.get("http://localhost:2999/title")
        .then((response)=>{
            console.log(response)
            this.setState({
                mainText : response.data.heroImageTitle
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export default heroImage; 