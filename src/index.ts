import { holidaysOf2022, workdaysOf2022 } from './2022';
import { holidaysOf2021, workdaysOf2021 } from './2021';
import { holidaysOf2020, workdaysOf2020 } from './2020';
import { holidaysOf2019, workdaysOf2019 } from './2019';
import { holidaysOf2018, workdaysOf2018 } from './2018';
import { holidaysOf2017, workdaysOf2017 } from './2017';
import { holidaysOf2016, workdaysOf2016 } from './2016';
import { holidaysOfLaw } from './common';

type TimeValue = Date | string | number;

const holidayMap = new Map([
  [2022, { holidays: holidaysOf2022, workdays: workdaysOf2022 }],
  [2021, { holidays: holidaysOf2021, workdays: workdaysOf2021 }],
  [2020, { holidays: holidaysOf2020, workdays: workdaysOf2020 }],
  [2019, { holidays: holidaysOf2019, workdays: workdaysOf2019 }],
  [2018, { holidays: holidaysOf2018, workdays: workdaysOf2018 }],
  [2017, { holidays: holidaysOf2017, workdays: workdaysOf2017 }],
  [2016, { holidays: holidaysOf2016, workdays: workdaysOf2016 }],
]);

/**
 * 判断是否为法定节假日，包括调休放假
 */
export function isHoliday(date: TimeValue): boolean {
  const dateWrapper = new Date(date);
  const year = dateWrapper.getFullYear();
  const month = (dateWrapper.getMonth() + 1).toString(10).padStart(2, '0');
  const dayOfMonth = dateWrapper
    .getDate()
    .toString(10)
    .padStart(2, '0');
  const dateFormatted = `${year}-${month}-${dayOfMonth}`; // 'YYYY-MM-DD'
  let holidayMapValue: ReturnType<typeof holidayMap.get>;
  if (holidayMap.has(year) && (holidayMapValue = holidayMap.get(year))) {
    const { holidays = [], workdays = [] } = holidayMapValue;
    // 法定放假
    if (holidays.includes(dateFormatted)) {
      return true;
    }
    // 法定上班
    if (workdays.includes(dateFormatted)) {
      return false;
    }
  } else {
    const monthDay = `${month}-${dayOfMonth}`; // 'MM-DD'
    // 法定公历假期
    if (holidaysOfLaw.includes(monthDay)) {
      return true;
    } else {
      console.log(
        `[public-holidays-cn] 暂时无法准确判断 ${year} 年度的法定节假日`
      );
    }
  }
  // 正常双休日
  if ([0, 6].includes(dateWrapper.getDay())) {
    return true;
  }
  return false;
}

/**
 * 判断是否是工作日，包括调休上班
 */
export function isWorkday(date: TimeValue): boolean {
  return !isHoliday(date);
}
