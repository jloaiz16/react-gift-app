import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GiffExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      <h1>GiffExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      {categories.map((cat) => (
        <GifGrid key={cat} category={cat} setCategories={setCategories} />
      ))}
    </>
  );
};

export default GiffExpertApp;
