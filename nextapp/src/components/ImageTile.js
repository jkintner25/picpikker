import Heart from './Heart';

const ImageTile = ({ image, handleSelect }) => {

  return (
    <div className="group relative">
      <img
        className="transistion ease-in-out hover:scale-105 duration-200"
        alt={image.description || "image from unsplash"}
        src={image.urls?.small}
      />
      <Heart image={image} handleSelect={()=>handleSelect(image)} />
    </div>
  );
};

export default ImageTile;
