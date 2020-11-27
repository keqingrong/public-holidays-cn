import { isHoliday, isWorkday } from '../src';

describe('Holidays in 2021', () => {
  it('2021-06-13 is a holiday', () => {
    expect(isHoliday('2021-06-13')).toBeTruthy();
  });

  it('2021-09-18 is a workday', () => {
    expect(isWorkday('2021-09-18')).toBeTruthy();
  });
});

describe('Holidays in 2020', () => {
  it('2020-02-01 is a holiday', () => {
    expect(isHoliday('2020-02-01')).toBeTruthy();
  });

  it('2020-03-16 is a workday', () => {
    expect(isWorkday('2020-03-16')).toBeTruthy();
  });
});

describe('Holidays in 2015', () => {
  it('2015-02-01 is a holiday', () => {
    expect(isHoliday('2015-02-01')).toBeTruthy();
  });

  it('2015-02-02 is a workday', () => {
    expect(isWorkday('2015-02-02')).toBeTruthy();
  });
});
