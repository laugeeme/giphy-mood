import React, { useEffect, useState } from 'react';
import './stylesheets/App.css';
import getGifs from './services/api';

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword: 'plant' }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {
        gifs.map((singleGif) => {
          return (
            <div>
              <h4> {singleGif.title}</h4>
              <small>{singleGif.id}</small>
              <img src={singleGif.url} alt={singleGif.title} />
            </div>
          );
        })}

        <button onClick={() => setGifs()}>Cambiar Gif</button>
      </section>
    </div>
  );
}

export default App;
