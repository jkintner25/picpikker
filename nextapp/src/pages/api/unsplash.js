export const unsplashAPI = {
  photos: `https://api.unsplash.com/photos/?client_id=${process.env.unsplashAccessKey}`,
  randomImage: `https://api.unsplash.com/photos/random/?client_id=${process.env.unsplashAccessKey}`,
  search: `https://api.unsplash.com/search/photos/?client_id=${process.env.unsplashAccessKey}&query=`
}
