import React, { useState } from 'react';
import './stylesheets/App.css';
import GifList from './components/GifList';

function App() {
  const [keyword, setKeyword] = useState('plant');
  return (
    <div className="App">
      <section className="App-content">
        <button onClick={() => setKeyword('love')}>Botón</button>
        <GifList keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
