import renderer from 'react-test-renderer';
import DisplayQuotes from '../Quote';

describe('Test quotes', () => {
  test('test if quotes page really matches', () => {
    const quotesRender = renderer
      .create(<DisplayQuotes />)
      .toJSON();
    expect(quotesRender).toMatchSnapshot();
  });
});
