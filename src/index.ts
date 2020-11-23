import dayjs from 'dayjs';
import { holidaysOf2020, workdaysOf2020 } from './2020';

type TimeValue = Date | string | number;

/**
 * 判断是否为法定节假日，包括调休放假
 */
export function isHoliday(date: TimeValue): boolean {
  const dateWrapper = dayjs(date);
  const dateFormatted = dateWrapper.format('YYYY-MM-DD');
  switch (dateWrapper.year()) {
    case 2020: {
      // 法定放假
      if (holidaysOf2020.includes(dateFormatted)) {
        return true;
      }
      // 法定上班
      if (workdaysOf2020.includes(dateFormatted)) {
        return false;
      }
      break;
    }
    default: {
      console.error(`暂不支持判断 ${dateWrapper.year()} 年度的法定节假日`);
      break;
    }
  }
  // 正常双休日
  if ([0, 6].includes(dateWrapper.day())) {
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
