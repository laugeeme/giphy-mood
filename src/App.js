import React, { useEffect, useState } from 'react';
import './stylesheets/App.css';
import getGifs from './services/api';
import GifList from './components/GifList';

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword: 'plant' }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        
        <GifList gifs={gifs} />

        <button onClick={() => setGifs()}>Cambiar Gif</button>
      </section>
    </div>
  );
}

export default App;
