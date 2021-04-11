import React from 'react';
import PropTypes from 'prop-types';
import './GifGridItem.css';

const GifGridItem = ({ item }) => {
  return (
    <div className='gif-container animate__bounceIn'>
      <h4> {item.title}</h4>
      <img src={item.url} alt={item.title} />
    </div>
  );
};

GifGridItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default GifGridItem;
