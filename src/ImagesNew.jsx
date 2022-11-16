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
        <span className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          New Image
        </span>
        <div className="mb-4 mt-2">
          <label className="block text-gray-300 font-semibold mb-2" for="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2" for="tags">
            Tags
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="tags"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2" for="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="description"
            type="textarea"
          />
        </div>
        <div className="mb-4">
          <label class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300" for="image_url">
            Image
          </label>
          <input
            class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="image_url_help"
            id="image_url"
            type="file"
            name="image_url"
          />
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
            SVG, PNG, JPG or GIF (MAX. nil x nil px).
          </p>
        </div>
        <button
          className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm  font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-800 my-2 mx-6"
          type="submit"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-700 rounded-md group-hover:bg-opacity-0">
            Upload
          </span>
        </button>
      </form>
    </div>
  );
}
