import { shallow } from 'enzyme';
import GifGridItem from '../../../src/components/GifGridItem';

describe('<GifGridItem /> suit test', () => {
  const title = 'Test';
  const url = 'https://media.giphy.com/media/X7s4uckfyihGJDrSpo/giphy.gif';
  const wrapper = shallow(
    <GifGridItem
      item={{
        id: '123ASDFA',
        title: title,
        url: url,
      }}
    />
  );

  test('Should render <GifGridItem /> properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should render <h4> with the title', () => {
    expect(wrapper.find('h4').text().trim()).toBe(title);
  });

  test('Should render <img> with the url and title', () => {
    const imgElement = wrapper.find('img').getElement();
    expect(imgElement.props.src).toBe(url);
    expect(imgElement.props.alt).toBe(title);
  });

  test('Should have class animate__bounceIn', () => {
    const divElement = wrapper.find('div').getElement();
    expect(
      divElement.props.className
        .split(' ')
        .some((item) => item === 'animate__bounceIn')
    ).toBe(true);
  });
});
