const AddArticles = () => {
  return (
    <div className="px-6 mb-10">
      <h2 className="text-3xl font-semibold text-center mb-3">Add Articles</h2>
      <form className="w-full md:w-[60%] mx-auto">
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text ">Title</span>
            </label>
            <label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text ">Img File Filed</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text ">Publisher</span>
            </label>
            <label>
              <input
                type="text"
                name="publisher"
                placeholder="Publisher"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text ">Tags</span>
            </label>
            <label>
              <input
                type="text"
                name="Tags"
                placeholder="Tags"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control mx-auto text-center mb-2 ">
          <label className="label">
            <span className="label-text ">Description:</span>
          </label>
          <textarea
            className="border p-5"
            name="service_des"
            id=""
            cols="10"
            rows="3"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button className="btn btn-block bg-gray-200 mt-3 ">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddArticles;
