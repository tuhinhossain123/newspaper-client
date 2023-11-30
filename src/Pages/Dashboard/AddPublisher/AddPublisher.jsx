import axios from "axios";
import useAxiosPublic from "../../Hooks/axios";

const images_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const images_hosting_api = `https://api.imgbb.com/1/upload?key=${images_hosting_key}`;
const AddPublisher = () => {
  const axiosPublic = useAxiosPublic();
  const handleFrom = async (e) => {
    e.preventDefault();
    const from = e.target;
    const publisherName = from.publisherName.value;
    const img = e.target.img.files[0];
 
    
    const image = { image: img };

    const res = await axiosPublic.post(images_hosting_api, image, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data.data);
    const user = { publisherName, img:res.data.data.display_url };
    console.log(user);

    axios.post("http://localhost:5000/publisher", user)
    .then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <h2 className="text-center text-3xl font-bold">Add Publisher</h2>
      <form
        onSubmit={handleFrom}
        className="w-full md:w-[60%] mx-auto bg-black rounded-md drop-shadow-2xl p-10 mt-4"
      >
        <div className="gap-5 mb-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <label>
              <input
                type="text"
                name="publisherName"
                placeholder="Publisher Name"
                className="input input-bordered w-full bg-gray-300"
              />
            </label>
          </div>
          <div className="form-control w-full mb-4">
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

export default AddPublisher;
