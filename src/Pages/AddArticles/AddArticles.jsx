const AddArticles = () => {
  return (
    <div className="px-6 mb-10">
      <h2 className="text-3xl font-semibold text-center mb-3">Add Articles</h2>
      <form className="w-full md:w-[60%] mx-auto bg-black rounded-sm drop-shadow-2xl p-10">
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
              className="file-input file-input-bordered w-full bg-gray-300"
            />
          </div>
        </div>
        <div className="md:flex justify-center gap-5 mb-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Publisher</span>
            </label>
            <label>
              <input
                type="text"
                name="publisher"
                placeholder="Publisher"
                className="input input-bordered w-full bg-gray-300"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Tags</span>
            </label>
            <label>
              <input
                type="text"
                name="Tags"
                placeholder="Tags"
                className="input input-bordered w-full bg-gray-300"
              />
            </label>
          </div>
        </div>
        <div className="form-control mx-auto text-center mb-2 ">
          <label className="label">
            <span className="label-text text-white">Description</span>
          </label>
          <textarea
            className="border p-5 bg-gray-300 rounded"
            name="service_des"
            id=""
            cols="10"
            rows="3"
          ></textarea>
        </div>
        <div className="flex justify-center mt-3">
          <input type="submit" value="Submit" className="input input-bordered w-full bg-gray-300"/>
        </div>
      </form>
    </div>
  );
};

export default AddArticles;
