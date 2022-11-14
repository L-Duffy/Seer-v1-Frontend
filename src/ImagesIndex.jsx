import { useEffect, useState } from "react";

export function ImagesIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  const [filteredImages, setFilteredImages] = useState(props.images);

  const imageFilter = () => {
    if (searchFilter.length === 0) {
      setFilteredImages(props.images);
    } else {
      setFilteredImages(
        props.images.filter((image) => {
          return (
            image.tags.filter((tag) => {
              return tag.name === searchFilter;
            }).length > 0
          );
        })
      );
    }
  };

  useEffect(imageFilter, [searchFilter, props.images]);

  return (
    <div>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 grid grid-cols-3 items-center">
        <div className="">
          <button
            className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm  font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-800 my-2 mx-6"
            onClick={() => props.onSelectNew()}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Upload
            </span>
          </button>
        </div>
        <div className="col-span-2 mr-6">
          <input
            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search"
            value={searchFilter}
            onChange={(event) => setSearchFilter(event.target.value)}
          />
        </div>
      </div>
      <div className="min-h-screen flex items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 p-4">
          {filteredImages.map((image) => {
            const wideImage = (image) => {
              console.log(image);
              if (image.width > image.height) {
                return "rounded-lg col-span-2";
              } else {
                return "rounded-lg";
              }
            };
            return (
              <div className={wideImage(image)} key={image.id}>
                <a onClick={() => props.onSelectImage(image)}>
                  <img className="rounded-lg" src={image.image_url} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// .filter((image) => image.tags.toLowerCase().includes(searchFilter.toLowerCase()))
