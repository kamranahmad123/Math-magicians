import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('Test Calculator', () => {
  test('test if Calculator really matches', () => {
    const quotesRender = renderer
      .create(<Calculator />)
      .toJSON();
    expect(quotesRender).toMatchSnapshot();
  });
});
