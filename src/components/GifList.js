import React, { Fragment, useEffect, useState } from 'react';
import getGifs from '../services/api';
import GifItem from './GifItem';

function GifList(props) {
  const { keyword } = props;

  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword })
    .then((gifs) => setGifs(gifs));
  }, [keyword]);




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
