import Header from "./Header"

const RenderHead = ()=>{
    const currentPath = window.location.pathname
    if(currentPath ==='/blog'){
        return null
    }
    else{
        return(
            <Header / >
        )
    }
}
export default RenderHead;