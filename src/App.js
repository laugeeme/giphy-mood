import React /* { useState } */ from 'react';
import './stylesheets/App.css';
import GifList from './components/GifList';
import { Route, Link } from 'wouter';

function App() {
  /* const [keyword, setKeyword] = useState('plant'); */
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <h1>What's your mood today?</h1>
        </Link>

        <div className="gif-options">
          <Link to="/gif/happy">Happy</Link>
          <Link to="/gif/sad">Sad</Link>
          <Link to="/gif/boring">Boring</Link>
          <Link to="/gif/hopeful">Hopeful</Link>
          <Link to="/gif/romantic">Romantic</Link>
          <Link to="/gif/humorous">Humorous</Link>
          <Link to="/gif/angry">Angry</Link>
        </div>

        {/* <button onClick={() => setKeyword('nature')}>Botón</button> */}
        <Route path="/gif/:keyword" component={GifList} />
      </section>
    </div>
  );
}

export default App;
