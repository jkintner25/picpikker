import { useLocalStorage } from '@/utils';

const ImageTile = ({image}) => {

  return (
    <>
      <img
        className="transistion ease-in-out hover:scale-105 duration-200"
        alt={image.description || "image from unsplash"}
        src={image.urls.small}
        onClick={() => useLocalStorage(image.id, image.links.download)} />
    </>
  );
};

export default ImageTile;

