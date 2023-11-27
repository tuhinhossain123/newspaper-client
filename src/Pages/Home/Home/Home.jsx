import GazaNews from "../../GazaNews/GazaNews";
import Plans from "../../Plans/Plans";
import Sports from "../../Sports/Sports";
import TrendingArticles from "../../TrendingArticles/TrendingArticles";

const Home = () => {
  return (
    <div>
      <TrendingArticles></TrendingArticles>
      <Plans></Plans>
    <GazaNews></GazaNews>
      <Sports></Sports>
    </div>
  );
};

export default Home;
