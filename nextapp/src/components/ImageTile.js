import useLocalStorage from "@/hooks";

const ImageTile = ({image}) => {
  const [storedValue, setValue] = useLocalStorage();

  console.log(storedValue)

  const addFavorite = () => {

  }

  return (
    <>
      <img
        className="transistion ease-in-out hover:scale-105 duration-200"
        alt={image.description || "image from unsplash"}
        src={image.urls.small}
        // onClick={()=>{addFavorite(image.id, image.urls.small)}}
        />
    </>
  );
};

export default ImageTile;
