import React from 'react';
import '../stylesheets/Gif.css'

function GifItem(props) {
  const { title, id, url } = props;

  return (
    <div className='gif-container'>
      <h4> {title}</h4>
      <img src={url} alt={title} />
    </div>
  );
}

export default GifItem;
