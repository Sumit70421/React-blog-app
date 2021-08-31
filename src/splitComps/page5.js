import ArticleList from './articleList';
import './page2.css'
import RightSplit from './rightSplit';

const page5 =()=>{
    return (
        <>
            <div className="navHeads"><h2 className="navHead">Fitness</h2>
            <hr className="latestHr" />
            </div>
            <div className="split">
                    <ArticleList />
                    <RightSplit />
                </div>
        </>
    )
}

export default page5;