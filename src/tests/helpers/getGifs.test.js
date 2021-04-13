import getGifs from './../../helpers/getGifs';

describe('getGis helper suit test', () => {
  test('Should get 8 elements of Gifs', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(8);
  });

  test('Should get 0 elements with an empty category', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
