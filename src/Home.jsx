import axios from "axios";
import { useState, useEffect } from "react";
import { ImagesIndex } from "./ImagesIndex";
import { ImagesShow } from "./ImagesShow";
import { ImagesNew } from "./ImagesNew";
import { Modal } from "./Modal";
import { Modal2 } from "./Modal2";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Home() {
  const [images, setImages] = useState([]);
  const [isImagesShowVisible, setIsImagesShowVisible] = useState(false);
  const [isImagesNewVisible, setIsImagesNewVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState({});

  const handleIndexImages = () => {
    console.log("handleIndexImages");
    axios.get("http://localhost:3000/images.json").then((response) => {
      console.log(response.data);
      setImages(response.data);
    });
  };

  const handleShowImage = (image) => {
    console.log("handleShowImage", image);
    setIsImagesShowVisible(true);
    setCurrentImage(image);
  };

  const handleHideImage = () => {
    console.log("handleHideImage");
    setIsImagesShowVisible(false);
  };

  const handleShowNew = () => {
    console.log("handleShowNew");
    setIsImagesNewVisible(true);
  };

  const handleHideNew = () => {
    console.log("handleHideNew");
    setIsImagesNewVisible(false);
  };

  const handleCreateImage = (params, successCallback) => {
    console.log("handleCreateImage", params);
    axios.post("http://localhost:3000/images.json", params).then((response) => {
      setImages([...images, response.data]);
      successCallback();
    });
    handleHideNew();
  };

  const handleUpdateImage = (id, params, successCallback) => {
    console.log("handleUpdateImage", params);
    axios.patch(`http://localhost:3000/images/${id}.json`, params).then((response) => {
      setImages(
        images.map((image) => {
          if (image.id === response.data.id) {
            return response.data;
          } else {
            return image;
          }
        })
      );
      successCallback();
      handleHideImage();
    });
  };

  const handleDestroyImage = (image) => {
    console.log("Image", image);
    axios.delete("http://localhost:3000/images/" + image.id + ".json").then((response) => {
      console.log(response);
      setImages(images.filter((p) => p.id !== image.id));
      handleHideImage();
    });
  };

  useEffect(handleIndexImages, []);

  return (
    <div>
      {localStorage.jwt === undefined ? (
        <div>
          <Login />
          <Signup />
        </div>
      ) : (
        <div>
          <ImagesIndex images={images} onSelectImage={handleShowImage} onSelectNew={handleShowNew} />
          <Modal show={isImagesShowVisible} onClose={handleHideImage}>
            <ImagesShow image={currentImage} onUpdateImage={handleUpdateImage} onDestroyImage={handleDestroyImage} />
          </Modal>
          <Modal2 show={isImagesNewVisible} onClose={handleHideNew}>
            <ImagesNew onCreateImage={handleCreateImage} />
          </Modal2>
        </div>
      )}
    </div>
  );
}
