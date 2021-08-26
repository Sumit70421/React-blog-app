import { NavLink } from 'react-router-dom'
import './title.css'

const title = ()=>{
    return(
        <div className="Title">
            <NavLink to="">
                <span id="vertical">The</span>
                <span id="horizontal">Siren</span>
            </NavLink>
            
        </div>
        
        
    )
}

export default title