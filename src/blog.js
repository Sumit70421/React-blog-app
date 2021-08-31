import { Link } from "react-router-dom";
import ReactCover from './imgs/ReactCover.png'
import code from './imgs/Code.png'
import './blog.css'
import {FaFacebookSquare , FaInstagramSquare , FaYoutubeSquare} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai'
const Blog = ()=>{

    return(
        <>
            <div className="HeaderBlog">
                <Link to="/"><span id="HeadVert">The</span>
                <span id="HeadHori">Siren</span></Link>
                <button id="getStarted">Get Started</button>
            </div>
            <div className="Content">
                <h3>5 Ways to animate a React app.</h3>
                <div className="User">
                    <img src="" className="userProfile" / >
                        <span className="userName">Dmitry Nozhenko</span>
                        <span className="date">Jan 28, 2019 · 10 min read</span>
                        <div className="socials">
                            <FaFacebookSquare />
                            <AiFillTwitterSquare />
                            <FaInstagramSquare />
                            <FaYoutubeSquare />
                        </div>
                </div>
                <img src={ReactCover} style={{width:"677px" ,height: "370px"}}/>
                <p>Animation in ReactJs app is a popular topic and there are many 
                    ways to create different types of animations.Many developers 
                    create animation exclusively using css and adding classes to HTML tags. 
                    This is a great way and you should use it. If you want to create complex 
                    animations you can pay attention to GreenSock. GreenSock is the most powerful animation 
                    platform. There are also a lot of libraries, components for creating animation in React. 
                    Let’s talk about them
                </p>
                <img src={code} style={{width:"673px" ,height: "701px"}}/>
            </div>
        </>
    )
}

export default Blog;