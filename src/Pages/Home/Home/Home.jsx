import GazaNews from "../../GazaNews/GazaNews";
import Plans from "../../Plans/Plans";
import Sports from "../../Sports/Sports";
import TrendingArticles from "../../TrendingArticles/TrendingArticles";


const Home = () => {
    return (
        <div>
            <Plans></Plans>
            {/* <TrendingArticles></TrendingArticles> */}
           <GazaNews></GazaNews>
           <Sports></Sports>
        </div>
    );
};

export default Home;