import React, { Fragment, useEffect, useState } from 'react';
import getGifs from '../services/api';
import GifItem from './GifItem';

function GifList(props) {
  const { params } = props;
  const { keyword } = params; 
  const [loading, setLoading] = useState(false)


  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    setLoading(true)
    getGifs({ keyword })
    .then((gifs) => {
        setGifs(gifs)
        setLoading(false)})
  }, [keyword]);


  if (loading) return <h2>Loading...</h2> 




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
