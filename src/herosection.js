import HeroImage from "./herosection/heroimage";
import SectionImage from "./herosection/sectionimage";
import './herosection/heromain.css'
import React from "react";
const herosection = ()=>{
    return(
        <div className="position">
            <HeroImage />
            <SectionImage />
        </div>
    )
}

export default herosection;