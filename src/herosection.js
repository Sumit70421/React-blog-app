import HeroImage from "./herosection/heroimage";
import SectionImage from "./herosection/sectionimage";
import './herosection/heromain.css'
import React from "react";
import axios from 'axios'
const herosection = ()=>{
    
    return(
        <div className="position">
            <HeroImage />
            <SectionImage />
        </div>
    )
}

export default herosection;