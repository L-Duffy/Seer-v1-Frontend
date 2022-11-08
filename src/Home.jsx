import axios from "axios";
import { useState, useEffect } from "react";
import { ImagesIndex } from "./ImagesIndex";
import { ImagesShow } from "./ImagesShow";
import { ImagesNew } from "./ImagesNew";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Home() {
  const [images, setImages] = useState([]);
  const [isImagesShowVisible, setIsImagesShowVisible] = useState(false);
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

  const handleCreateImage = (params, successCallback) => {
    console.log("handleCreateImage", params);
    axios.post("http://localhost:3000/images.json", params).then((response) => {
      setImages([...images, response.data]);
      successCallback();
    });
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
    axios.delete(`http://localhost:3000/images/${image.id}.json`).then((response) => {
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
          <ImagesNew onCreateImage={handleCreateImage} />
          <ImagesIndex images={images} onSelectImage={handleShowImage} />
          <Modal show={isImagesShowVisible} onClose={handleHideImage}>
            <ImagesShow image={currentImage} onUpdateImage={handleUpdateImage} onDestroyPhoto={handleDestroyImage} />
          </Modal>
        </div>
      )}
    </div>
  );
}
