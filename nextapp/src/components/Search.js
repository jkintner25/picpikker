import { useEffect, useState } from "react";
import { fetchImages, unsplashAPI } from "@/pages/api/unsplash";

const Search = ({ setImages }) => {
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(()=>{
    updateSearchField()
  }, [searchQuery])

  const submit = async (e) => {
    e.preventDefault()
    if (!searchQuery) return;
    let images = await fetch(unsplashAPI.search.concat(searchQuery))
    let data = await images.json()
    setImages(data.results);
  }

  const reset = async (e) => {
    e.preventDefault()
    setSearchQuery('')
    fetchImages().then(res => {
      setImages(res)
    })
  }

  const updateSearchField = () => {
    setSearchQuery(searchQuery.replace(/[^a-zA-Z\d ]/g, ""))
  }

  return (
    <div className="flex justify-center my-20">
      <input
        className="outline outline-offset-0 rounded-md mx-4 w-80 h-12 p-3"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <a href="" onClick={submit} className="relative inline-block text-lg group mx-2">
        <span className="relative z-10 block px-3.5 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-3.5 py-2 rounded-lg bg-gray-50"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -translate-x-full translate-y-12 bg-green-500 group-hover:-rotate-180 ease"></span>
          <span className="relative">Submit</span>
        </span>
        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
      </a>
      <a href="" onClick={reset} className="relative inline-block text-lg group mx-2">
        <span className="relative z-10 block px-3.5 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-3.5 py-2 rounded-lg bg-gray-50"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -translate-x-full translate-y-12 bg-green-500 group-hover:-rotate-180 ease"></span>
          <span className="relative">Reset</span>
        </span>
        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
      </a>
    </div>
  )
}

export default Search;
