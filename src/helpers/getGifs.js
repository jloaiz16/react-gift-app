const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=gBCJa60hdLsXel7gLIML8rWGlobwpbiy&q=${encodeURI(
    category
  )}&limit=8`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  return data.map((omg) => {
    return {
      id: omg.id,
      title: omg.title,
      url: omg.images.downsized_medium.url,
    };
  });
};

export default getGifs;
