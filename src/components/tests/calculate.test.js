import calculate from '../../logic/calculate';

describe('Perform the Arthimatic opertions', () => {
  test('5 + 6 = 11', () => {
    const Obj = { total: '5', next: '6', operation: '+' };
    const perform = '=';
    expect(calculate(Obj, perform).total).toBe('11');
  });
  test('13 - 5 = 8', () => {
    const Obj = { total: '13', next: '5', operation: '-' };
    const perform = '=';
    expect(calculate(Obj, perform).total).toBe('8');
  });
});
