export function ImagesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateImage(props.image.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyImage(props.image);
  };

  return (
    <div>
      <img src={props.image.image_url} />
      <div className="flex">
        <span className="block text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mt-0.5">
          Tags:&nbsp;
        </span>
        {props.image.tags.map((tag) => (
          <p className="text-purple-600 font-semibold">{tag.name},&nbsp;</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="md:flex">
          <div>
            <label className="block text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-1">
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              defaultValue={props.image.name}
              name="name"
              type="text"
              size="20"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-1">
              Description:
            </label>
            <textarea
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              defaultValue={props.image.description}
              name="width"
              type="textarea"
              size="20"
              rows="1"
            />
          </div>
        </div>
        <div>
          <button
            className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm  font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
            type="submit"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
              Update
            </span>
          </button>
          <button
            className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm  font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
            onClick={handleClick}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
              Delete
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
