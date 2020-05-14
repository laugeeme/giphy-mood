import React from 'react';

function GifItem(props) {
  const { title, id, url } = props;

  return (
    <div>
      <h4> {title}</h4>
      <small>{id}</small>
      <img src={url} alt={title} />
    </div>
  );
}

export default GifItem;
