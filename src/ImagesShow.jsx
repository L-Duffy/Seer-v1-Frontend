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
      <div>
        Tags:
        {props.image.tags.map((tag) => (
          <li>{tag.name}</li>
        ))}
      </div>
      <h1>Image Info</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.image.name} name="name" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.image.description} name="width" type="text" />
        </div>
        <button type="submit">Update Image</button>
      </form>
      <button onClick={handleClick}>Delete Image</button>
    </div>
  );
}
