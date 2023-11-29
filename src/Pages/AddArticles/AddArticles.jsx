import Select from "react-select";
import useAxiosPublic from "../Hooks/axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const images_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const images_hosting_api = `https://api.imgbb.com/1/upload?key=${images_hosting_key}`;
const AddArticles = () => {

  const axiosPublic = useAxiosPublic();
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{console.log(tags)},[tags])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const title = from.title.value;
    const img = e.target.img.files[0];
    const publisher = from.publisher.value;
    const description = from.description.value;

    const image = { image: img };

    const res = await axiosPublic.post(images_hosting_api, image, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    const user = {
      title,
      img: res.data.data.url,
      publisher,
      description,
      tags: tags.map((tag) => tag.value),
    };

    console.log(user);

    fetch("https://newspaper-server-ten.vercel.app/allArticles", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    navigate("/allArticles");
  };

  const options = [
    { value: "Education", label: "Education" },
    { value: "Sports", label: "Sports" },
    { value: "Environment", label: "Environment" },
    { value: "Health", label: "Health" },
    { value: "", label: "Personal Growth" },
    { value: "", world: "world" },
  ];

  return (
    <div className="px-6 mb-10">
      <h2 className="text-3xl font-semibold text-center mb-3">Add Articles</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[60%] mx-auto bg-black rounded-sm drop-shadow-2xl p-10"
      >
        <div className="md:flex justify-center gap-5 mb-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Title</span>
            </label>
            <label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered w-full bg-gray-300"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Img File Filed</span>
            </label>
            <input
              type="file"
              name="img"
              className="file-input file-input-bordered w-full bg-gray-300"
            />
          </div>
        </div>
        <div className="md:flex justify-center gap-5 mb-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text dark:text-white">Publisher</span>
            </label>
            <select
              id=""
              name="publisher"
              className=" input p-3 input-bordered w-full bg-gray-300"
            >
              <option value="tuhin">Tuhin</option>
              <option value="riyan">Riyan</option>
              <option value="upal">Upal</option>
              <option value="abir">Abir</option>
              <option value="tanvir">Tanvir</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Tags</span>
            </label>
            <Select
              defaultValue={[options[1]]}
              isMulti
              name="tags"
              options={options}
              classNamePrefix="select"
              onChange={(value) => {
                setTags(value);
              }}
            />
          </div>
        </div>
        <div className="form-control mx-auto text-center mb-2 ">
          <label className="label">
            <span className="label-text text-white">Description</span>
          </label>
          <textarea
            className="border p-5 bg-gray-300 rounded"
            name="description"
            id=""
            cols="10"
            rows="3"
          ></textarea>
        </div>
        <div className="flex justify-center mt-3">
          <input
            type="submit"
            value="Submit"
            className="input input-bordered w-full bg-gray-300"
          />
        </div>
      </form>
    </div>
  );
};

export default AddArticles;
