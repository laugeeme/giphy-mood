require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;

function getGifs({ keyword = 'think' } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`;

  return fetch(apiURL)
    .then((response) => response.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { title, id, images } = image;
        const { url } = images.downsized_medium;

        return { title, id, url };
      });
      return gifs;
    });
}

export default getGifs;
