import { useLoaderData } from "react-router-dom";
import Articles from "../Articles/Articles";
import { useState } from "react";

const AllArticles = () => {
  const data = useLoaderData();
  const [searchItem, setSearchItem] = useState("");
  const filterData = data?.filter((item) =>
    item.title?.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="my-16 mb-10">
        <input
          type="search"
          name=""
          id=""
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Search Service"
          className="p-3 text-lg  border-black rounded w-full text-white bg-black"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 md:px-0  mb-10">
        {filterData?.map((articles) => (
          <Articles
            key={articles._id}
            articles={articles}
            searchItem={searchItem}
            setSearchItem={setSearchItem}
          ></Articles>
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
