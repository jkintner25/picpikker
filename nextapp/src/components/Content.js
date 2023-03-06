import { useState, useEffect } from "react";
import { fetchImages } from "@/pages/api/unsplash";
import ImageTile from "./ImageTile";
import Search from "./Search";
import {
  addItem,
  removeItem
} from '../store/';
import { useAppContext } from "@/context";

const Content = () => {
  const { imageStore, dispatch } = useAppContext()
  const [images, setImages] = useState([]);
  const [clickedImage, setClickedImage] = useState(false)

  useEffect(() => {
    fetchImages().then(res => {
      setImages(res)
    })
  }, []);

  useEffect(() => {
    let newStorage = JSON.stringify(imageStore)
    localStorage.setItem('picpicker', newStorage)
  }, [imageStore])

  const handleSelect = (image) => {
    if (imageStore[image.id]) {
      removeItem(dispatch, image)
    } else {
      addItem(dispatch, image)
    }
    setClickedImage(!clickedImage)
  }

  return (
    <div className="flex-col justify-center items-center">
      <Search setImages={setImages} />
      <div className="w-full max-w-7xl p-5 pb-10 mx-auto mb-10 gap-3 columns-4 space-y-5">
        {images ? images.map((image) => {
          return <ImageTile key={image.id} image={image} handleSelect={handleSelect} imageStore={imageStore} />
        }) : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Content;
