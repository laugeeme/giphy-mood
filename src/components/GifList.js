import React, { Fragment } from 'react';
import GifItem from './GifItem';

function GifList(props) {
  const { gifs } = props;

  return (
    <Fragment>
      {gifs.map((singleGif) => (
        <GifItem
          key={singleGif.id}
          id={singleGif.id}
          title={singleGif.title}
          url={singleGif.url}
        />
      ))}
    </Fragment>
  );
}

export default GifList;
