import HeroSection from './herosection';
import Latest from './latest';
import LatestArticle from './latestArticles';
import LatestStories from './latestStories';

const Home = ()=>{
    return(
        <>
        <HeroSection />
        <Latest />
        <LatestArticle />
        <LatestStories />
        </>
    )
}

export default Home;
