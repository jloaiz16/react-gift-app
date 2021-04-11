import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './GifGrid.css';
import GifGridItem from './GifGridItem';

import { useFetchGif } from '../hooks/useFetchGif';

const GifGrid = ({ category, setCategories }) => {
  const { data, loading } = useFetchGif(category);
  return (
    <>
      <div className='header'>
        <h3> {category} </h3>
        <button
          onClick={() =>
            setCategories((cat) => cat.filter((x) => x !== category))
          }
        >
          Remove
        </button>
      </div>
      {loading && <h4 className='animate__flipInX'> Loading ... </h4>}
      <br />
      <div className='grid-container'>
        {data.map((gif) => (
          <GifGridItem item={gif} key={gif.id} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
