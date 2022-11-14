export function ImagesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateImage(params);
    event.target.reset();
  };

  return (
    <div>
      <h1>New Image</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Tags: <input name="tags" type="text" />
        </div>
        <div>
          Description: <textarea name="description" type="textarea" />
        </div>
        <div>
          Image: <input name="image_url" type="file" />
        </div>
        <button type="submit">Create Image</button>
      </form>
    </div>
  );
}
