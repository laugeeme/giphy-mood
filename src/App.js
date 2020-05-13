import React, {useState} from 'react';
import './stylesheets/App.css';


const gifsURL = [
  'https://media.giphy.com/media/8qoBeSY1gFgY0E7a4O/giphy.gif',
  'https://media.giphy.com/media/3oEdv8rHAz6eEwquwo/giphy.gif',
]


function App() {
  const [gifs, setGifs] = useState (gifsURL)
  

  return (
    <div className="App">
      <section className="App-content">

      {
        gifs.map(singleGif => <img src={singleGif} alt="Gif"/>)
      }
  
        
      </section>
    </div>
  );
}

export default App;
