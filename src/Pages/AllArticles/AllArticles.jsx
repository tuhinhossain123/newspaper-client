import { useLoaderData } from "react-router-dom";
import Articles from "../Articles/Articles";
import { useState } from "react";

const AllArticles = () => {
  const data = useLoaderData();
  const [searchItem, setSearchItem] = useState("");
//   const filterData = showAll?.filter((item) =>
//   item.service_name?.toLowerCase().includes(searchItem.toLowerCase())
// );
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="my-16 mb-10 flex justify-center">
        <input
          type="search"
          name=""
          id=""
        //   value={searchItem}
        //   onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Search Service"
          className="p-3 bg-gray-200 text-lg text-black border-2 border-black rounded w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 md:px-0  mb-10">
        {data?.map((articles) => (
          <Articles key={articles._id} articles={articles}></Articles>
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
