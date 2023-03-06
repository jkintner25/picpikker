# Pic Pickür
A simple image gallery allowing users to search for images by keyword and add/remove them to/from the favorites page.

## Run Locally

```javascript
$> git clone https://github.com/jkintner25/picpikker.git
$> cd nextapp
$> npm install
$> npm run dev
```
In order for the API requests to work, you'll need to do the following:
1. In the nextapp directory, create a file called `next.config.js`.
2. Paste this code:
```javascript
module.exports = {
  env: {
    NEXT_PUBLIC_API: {your-unsplash-api-key},
  },
}
```
3. Follow the directions [here](https://unsplash.com/documentation) to acquire an api key to paste in the above code.

## Screenshots
Homepage
![homepage](https://user-images.githubusercontent.com/95717139/223176364-9d5689d0-e33c-4786-9a2e-a144041378c9.png)
Favorites
![favorites](https://user-images.githubusercontent.com/95717139/223176416-76c9417b-04bf-4fa9-949a-3accb6066f65.png)

## Technologies
* React.js
* Next.js
* Tailwind CSS
* Unsplash API

## Future Plans
* Allow users to copy image link
* Dark mode
* Mobile-centric styling make-over as well as general styling improvements
* Image viewer modal
