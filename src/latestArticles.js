import { Component } from "react";
import './css/latestarticle.css'
import ArticleList from "./splitComps/articleList";
import RightSplit from "./splitComps/rightSplit";
class LatestArticle extends Component{
    render() {
        return (
            <div className="arList">
                <h2 id="listHead">Latest Articles</h2>
                <hr id="listLine" />
                <div className="split">
                    <ArticleList />
                    <RightSplit />
                </div>
            </div>
        )
    }
}
export default LatestArticle;