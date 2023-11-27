import { useLoaderData } from "react-router-dom";
import Articles from "../Articles/Articles";


const AllArticles = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] mx-auto px-2 md:px-0  mb-10">
            {
                data?.map(articles=> <Articles key={articles._id} articles={articles}></Articles>)
            }
        </div>
    );
};

export default AllArticles;