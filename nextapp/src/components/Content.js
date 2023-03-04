import { useState, useEffect } from "react";
import { unsplashAPI } from "@/pages/api/unsplash";
import ImageTile from "./ImageTile";

const Content = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    let images = await fetch(unsplashAPI.search.concat('espresso'))
    let data = await images.json()
    return data;
  }

  useEffect(() => {
    fetchImages().then(res => {
      setImages(res.results)
    })
  }, [])

  console.log(images)

  return (
    <div className="flex-auto items-center w-screen">
      <h1>Hello</h1>
      {images.length && images.map((image) => {
        return <ImageTile key={image.id} image={image} />
      })}
    </div>
  );
};

export default Content;
