import { Component } from "react";
import './sectionimage.css'
class sectionImage extends Component{
    constructor(){
        super()
        this.state= {
            sectionUpText:"The Sound Cloud You know is doomed",
            UpSubtext:"Travel / August 21 2017",
            sectionDownText: "The Sound Cloud You know is doomed",
            DownSubtext: "Travel / August 21 2017",
            
        }
    }
    render(){
        return(
            <div className="secContainer">
                 <div className="sectionUp">
                    <span className="mainText">{this.state.sectionUpText}</span>
                    <span className="subText">{this.state.UpSubtext}</span>
                 </div>
                 <div className="sectionDown">
                 <span className="mainText">{this.state.sectionUpText}</span>
                 <span className="subText">{this.state.UpSubtext}</span>
                 </div>   
            </div>
            
        )
    }
}

export default sectionImage;