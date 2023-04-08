import operate from '../../logic/operate';

describe('Testing operate function', () => {
  test('Testing Addition operation', () => {
    const addition = operate;
    expect(addition(6, 9, '+')).toBe('15');
  });
  test('Testing Subtraction operation', () => {
    const subtraction = operate;
    expect(subtraction(16, 9, '-')).toBe('7');
  });
  test('Testing Multiplication operation', () => {
    const multiplication = operate;
    expect(multiplication(5, 4, 'x')).toBe('20');
  });
  test('Testing Devision operation', () => {
    const division = operate;
    expect(division(36, 6, '÷')).toBe('6');
  });
});
