import { NavLink } from 'react-router-dom'
import './title.css'
import {FaBars} from 'react-icons/fa'
const title = ()=>{
    const toggleMenu = ()=>{
        let menu = document.getElementById('ham')
        menu.classList.toggle('visible')
    }
    
    return(
        <>
        <div className="Title">
            <NavLink to="">
                <span id="vertical">The</span>
                <span id="horizontal">Siren</span>
            </NavLink>
        </div>
        <div className="titleRes">
            <NavLink to="/"><span id="HeadVert">The</span>
            <span id="HeadHori">Siren</span></NavLink>
            <FaBars onClick={toggleMenu} id="hamicon"/>
            <div className="Menu visible" id="ham">
                <p className="MenuItem">Bollywood</p>
                <p className="MenuItem">Technology</p>
                <p className="MenuItem">Hollywood</p>
                <p className="MenuItem">Fitness</p>
                <p className="MenuItem">Food</p>
            </div>
        </div>
        
        </>
        
    )
}

export default title