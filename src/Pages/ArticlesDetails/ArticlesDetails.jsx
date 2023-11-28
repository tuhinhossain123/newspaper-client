import { useLoaderData } from "react-router-dom";



const ArticlesDetails = () => {
    const details = useLoaderData()
    return (
        <div className="w-[80%] mx-auto">
           <img src={details.img} alt="" className="w-full h-[80vh]"/>
           <p className="text-right py-1"><span className="font-bold">Publisher: </span>{details.publisher}</p>
           <h2 className="text-4xl font-bold my-4">{details.title}</h2>
           <p className=" font-semibold my-4">{details.description}</p>
        </div>
    );
};

export default ArticlesDetails;