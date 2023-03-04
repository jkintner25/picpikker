

const ImageTile = ({image}) => {
  console.log(image)

  return (
    <>
      <div />
      <img alt={image.description} src={image.urls.small} />
    </>
  );
};

export default ImageTile;
