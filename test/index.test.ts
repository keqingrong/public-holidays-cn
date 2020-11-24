import { isHoliday, isWorkday } from '../src';

describe('Holidays in 2020', () => {
  it('2015-02-01 is a holiday', () => {
    expect(isHoliday('2015-02-01')).toEqual(true);
  });

  it('2015-02-02 is a workday', () => {
    expect(isWorkday('2015-02-02')).toEqual(true);
  });

  it('2020-02-01 is a holiday', () => {
    expect(isHoliday('2020-02-01')).toEqual(true);
  });

  it('2020-03-16 is a workday', () => {
    expect(isWorkday('2020-03-16')).toEqual(true);
  });
});
