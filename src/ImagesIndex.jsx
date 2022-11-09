import { useState } from "react";

export function ImagesIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <h1>All Images</h1>
      Search filter:
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      {props.images
        .filter((image) => {
          return (
            image.tags.filter((tag) => {
              return tag.name === searchFilter;
            }).length >= 0
          );
        })
        .map((image) => (
          <div key={image.id}>
            <h2>{image.name}</h2>
            <img src={image.image_url} />
            <p>{image.description}</p>
            <button onClick={() => props.onSelectImage(image)}>More Info</button>
          </div>
        ))}
    </div>
  );
}

// .filter((image) => image.tags.toLowerCase().includes(searchFilter.toLowerCase()))
