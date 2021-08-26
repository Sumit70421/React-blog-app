import Title from './Header/title'
import Navbar from './Header/navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import navbar from './Header/navbar'
const header = ()=>{
    return(
        <>

        <Title />
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
        
        </>
    )
}

export default header