import ArticleList from './articleList';
import './page2.css'
import RightSplit from './rightSplit';

const page3 =()=>{
    return (
        <>
            <div className="navHeads"><h2 className="navHead">Technology</h2>
            <hr className="latestHr" />
            </div>
            <div className="split">
                    <ArticleList />
                    <RightSplit />
                </div>
        </>
    )
}

export default page3;