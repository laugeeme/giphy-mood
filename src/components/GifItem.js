import React from 'react';
import '../stylesheets/Gif.css'

function GifItem(props) {
  const { title, id, url } = props;

  return (
    <a href={`#${id}`} className='gif-container'>
      <h4> {title}</h4>
      <img src={url} alt={title} />
    </a>
  );
}

export default GifItem;
