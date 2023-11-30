import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Publisher = () => {
  const [publisher, setPublisher] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/publisher")
      .then((res) => res.json())
      .then((data) => {
        setPublisher(data);
      });
  }, []);
  return (
    <div className="mb-10  max-w-[1200px] mx-auto px-5 md:px-0">
      <h2 className="text-2xl font-semibold mb-2 px-5 md:px-0">
        All Publisher
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {publisher?.map((publish) => (
          <div key={publish._id}>
            <div className="relative">
              <img src={publish.img} alt="" className="rounded w-full h-[60vh]" />
            </div>
            <div className=" absolute -mt-12 ml-24">
              <div className="flex justify-center items-center gap-2 text-xl text-red-600">
                <FaFacebookF />
                <FaTwitter />
              </div>
              <h2 className="text-lg font-semibold text-center">
                {" "}
                {publish.publisherName}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publisher;
