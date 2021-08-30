import Title from './Header/title'
import Navbar from './Header/navbar'
import { BrowserRouter } from 'react-router-dom'

const header = ()=>{
    return(
        <>
        <BrowserRouter>
            <Title />
            <Navbar />
        </BrowserRouter>
        
        </>
    )
}

export default header