import { format } from 'date-fns';

export function timestamp(dateTime: Date) {
  const date = format(new Date(
    dateTime.getUTCFullYear(),
    dateTime.getUTCMonth(),
    dateTime.getUTCDate(),
    dateTime.getUTCHours(),
    dateTime.getUTCMinutes(),
    dateTime.getUTCSeconds()
    ), 'yyyy-MM-dd:HH:mm:ss');

  return date.split('-').join('').split(':').join('');
}
