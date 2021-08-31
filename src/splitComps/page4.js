import ArticleList from './articleList';
import './page2.css'
import RightSplit from './rightSplit';

const page4 =()=>{
    return (
        <>
            <div className="navHeads"><h2 className="navHead">Hollywood</h2>
            <hr className="latestHr" />
            </div>
            <div className="split">
                    <ArticleList />
                    <RightSplit />
                </div>
        </>
    )
}

export default page4;