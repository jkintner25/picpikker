import { useState, useEffect } from "react";
import { unsplashAPI } from "@/pages/api/unsplash";
import ImageTile from "./ImageTile";
import Search from "./Search";

const Content = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    let images = await fetch(unsplashAPI.photos)
    let data = await images.json()
    return data;
  };

  useEffect(() => {
    fetchImages().then(res => {
      setImages(res)
    })
  }, []);

  return (
    <div>
      <Search setImages={setImages} />
      <div className="w-full max-w-7xl p-5 pb-10 mx-auto mb-10 gap-3 columns-4 space-y-5">
        {images ? images.map((image) => {
          return <ImageTile key={image.id} image={image} />
        }) : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Content;
