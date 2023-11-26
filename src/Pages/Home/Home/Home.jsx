import GazaNews from "../../GazaNews/GazaNews";
import Sports from "../../Sports/Sports";
import TrendingArticles from "../../TrendingArticles/TrendingArticles";


const Home = () => {
    return (
        <div>
            <TrendingArticles></TrendingArticles>
           <GazaNews></GazaNews>
           <Sports></Sports>
        </div>
    );
};

export default Home;