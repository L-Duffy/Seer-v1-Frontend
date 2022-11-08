export function ImagesIndex(props) {
  return (
    <div>
      <h1>All Images</h1>
      {props.images.map((image) => (
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
