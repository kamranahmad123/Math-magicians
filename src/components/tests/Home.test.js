import renderer from 'react-test-renderer';
import HomePage from '../Home';

describe('performing test for home', () => {
  test('testing if home really matches', () => {
    const homeRender = renderer
      .create(<HomePage />)
      .toJSON();
    expect(homeRender).toMatchSnapshot();
  });
});
