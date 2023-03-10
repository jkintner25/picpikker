import ImageTile from "@/components/ImageTile";
import Nav from "@/components/Nav";
import { useAppContext } from "@/context";
import { removeItem } from "@/store";
import Head from "next/head";
import { useEffect, useState } from "react";

const Favorites = () => {
  const { imageStore, dispatch } = useAppContext();
  const [dink, setDink] = useState(false);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    let images = Object.values(imageStore)
    setFavs(images)
  }, [dink])

  useEffect(() => {
    let newStorage = JSON.stringify(imageStore)
    localStorage.setItem('picpicker', newStorage)
    setDink(!dink)
  }, [imageStore])

  const handleSelect = (image) => {
    removeItem(dispatch, image)
  };

  return (
    <>
      <Head>
        <title>Pic Pick&uuml;r</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className='flex-col w-full items-center justify-center'>
        <h1 className='text-7xl font-bold text-center my-20' >Favorites</h1>
        <div className="w-full max-w-7xl p-5 pb-10 mx-auto mb-10 gap-3 columns-4 space-y-5">

          {favs ? favs.map(image => {
            return <ImageTile key={image.id} image={image} handleSelect={handleSelect} />
          })
            :
            <h1>Pick some pics!</h1>}
        </div>
      </main>
    </>
  )
};

export default Favorites;
