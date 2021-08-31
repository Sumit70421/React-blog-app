import { BrowserRouter, NavLink } from 'react-router-dom'
import { Component } from 'react'
import './navbar.css'

class navbar extends Component{
    constructor(){
        super();
        this.state = {
            nav1: "Home",
            nav2: "Bollywood",
            nav3: "Technology",
            nav4: "Hollywood" ,
            nav5: "Fitness",
            nav6: "Food"
        }
    }
    render(){
        return(
            <>
            <div className="navbar">
                <NavLink activeClassName="activeNav" to="/" exact>{this.state.nav1}</NavLink>
                <NavLink activeClassName="activeNav" to="/nav2">{this.state.nav2}</NavLink>
                <NavLink activeClassName="activeNav" to="/nav3">{this.state.nav3}</NavLink>
                <NavLink activeClassName="activeNav" to="/nav4">{this.state.nav4}</NavLink>
                <NavLink activeClassName="activeNav" to="/nav5">{this.state.nav5}</NavLink>
                <NavLink activeClassName="activeNav" to="/nav6">{this.state.nav6}</NavLink>
            </div>
            <hr />
            </>
        )
    }
}



export default navbar 