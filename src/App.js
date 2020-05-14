import React, { useEffect, useState } from 'react';
import './stylesheets/App.css';
import getGifs from './services/api';
import GifItem from './components/GifItem';

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword: 'plant' }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <GifItem
            title={singleGif.title}
            url={singleGif.url}
            id={singleGif.id}
          />
        ))}

        <button onClick={() => setGifs()}>Cambiar Gif</button>
      </section>
    </div>
  );
}

export default App;
