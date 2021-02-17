/* eslint-disable-next-line max-lines-per-function, max-statements */

/*
// UNDERSTANDING THE PROBLEM
- construct objects representing meetup date
- each object takes: month number (1-12),  year (eg 2021)
- object can determine exact date of mtg

descriptor strings:
- 'first', 'second', 'third', 'fourth', 'last', 'teenth'
 - every month has one 'teenth' day (mon, tues, etc..)
- case insensitive

days of week strings:
- 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
 'Saturday', and 'Sunday'
- case insensitive

NOTES:
- April, June, September, and November have 30 days.
- February has 28 in most years, but 29 in leap years.
- All the other months have 31 days.
- The first day of the week of the month (DOWM) is always
 between the 1st and 7th of the month.
- The second DOWM is between the 8th and 14th.
- The third DOWM is between the 15th and 21st.
- The fourth DOWM is between the 22nd and 28th.
- The fifth DOWM is between the 29th and 31st.
- The last DOWM is between the 22nd and the 31st,
 depending on the number of days in the month.

// EXAMPLES/EDGE CASES:
- if you ask for 2nd wednesday of may 2021, object can
determine meetup date as 12th of may, 2021

- Define a class Meetup with:
- a constructor:
 - takes a month (1-12) and a year (eg 2020)
- a method named day:
 - determines the date of the meetup
 - arguments:
  - day of the week: monday, tuesday, wednesday, etc.
  - schedule descriptor: first, second, third, fourth, fifth,
  last, or teenth.
 - returns date as Date object

// DATA STRUCTURE(S):
workg with Date objects

// ALGORITHM:
- determine 7 day period in which meetup occurs
- search range of dates that have meetup date for
 the date that matches the desired day of wk
- month nums in Date objects are 0-11 (Jan-Dec)
- determine last day of month by using Date class by
 passing a day arg of 0 to Date constructor to create a
 Date object that represents the last day of month prior
 to the indicated yr and month

constructor:
- save year and month args
- determine the last day of month (28-31)

day method:
- convert weekday and schedule args to lowercase
- calculate first possible day of month for meetup
- calculate last possible day of month for meetup
- search range of possible days for the date that
 happens on the desired day of the wk
- return a date obj for the first matching day or a value
showing that a meetup date couldn't be found

make a day of week object (0-6)
make a schedule start day object (see understand prob)
*/

"use strict";

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.daysInMonth = new Date(this.year, this.month, 0).getDate();
  }

  static DAY_OF_WK = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  static SCHEDULE_START_DAY = {
    first: 1,
    second: 8,
    third: 15,
    fourth: 22,
    fifth: 29,
    teenth: 13,
    last: undefined,
  };

  day(weekday, schedule) {
    weekday = weekday.toLowerCase();
    schedule = schedule.toLowerCase();

    let dayOfWeek = Meetup.DAY_OF_WK.indexOf(weekday);
    let scheduleDesc = Meetup.SCHEDULE_START_DAY[schedule];
    let firstDay = scheduleDesc || this.daysInMonth - 6;
    let lastDay = Math.min(firstDay + 6, this.daysInMonth);

    for (let day = firstDay; day <= lastDay; day += 1) {
      let date = new Date(this.year, this.month - 1, day);
      if (date.getDay() === dayOfWeek) {
        return date;
      }
    }
    return null;
  }
}

module.exports = Meetup;
