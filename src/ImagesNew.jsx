export function ImagesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateImage(params);
    event.target.reset();
  };

  return (
    <div>
      <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <span className="py-2 font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          New Image
        </span>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" for="tags">
            Tags
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="tags"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" for="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="description"
            type="textarea"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" for="image_url">
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-600 leading-tight focus:outline-none focus:shadow-outline"
            name="image_url"
            type="file"
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
