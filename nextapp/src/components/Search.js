import { useState } from "react";
import { unsplashAPI } from "@/pages/api/unsplash";

const Search = ({setImages}) => {
  const [searchQuery, setSearchQuery] = useState('')

  const submit = async () => {
    let images = await fetch(unsplashAPI.search.concat(searchQuery))
    let data = await images.json()
    setImages(data.results);
  }

  return (
    <div className="flex-row justify-center">
      <input
        className="outline outline-offset-0 rounded-md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={submit} >Search</button>
    </div>
  )
}

export default Search;
