/* eslint-disable */

/*
// UNDERSTANDING THE PROBLEM
- create a clock that is independent of date
- ability to:
 - add minutes to time represented by clock object
 - subtract minutes from time
 - 2 clock objects that represent the same time should be equal

  // NOTES:
  - don't use any built-in date or time functionality
  - use only arithmetic operations

// EXAMPLES/EDGE CASES:
8 => '08:00'
9 => '09:00'
11, 9 => '11:09'

// DATA STRUCTURE(S):

// ALGORITHM:
constructor method:
- accepts up to 2 arguments (numbers):
 - hour (24 hr clock)
 - minutes (default value of 0)

static at method:
 - creates and returns a new Clock instance using Clock constructor

toString method:
- returns clock's current time as a string

add method:
- accepts number (of minutes) as argument to add to current time
    // add mins to this.minutes
    // if the result is < 60, save to this.minutes
    // if the result is > 60:
    // divide the result by 60 to get the number of hours in minutes (if any)
    // - add the hours to this.hour
    // - subtract the hours from total minutes
    // add remainder of minutes to minutes

subtract method:
- accepts number (of minutes) as argument to subtract from current time

isEqual method:
- accepts an object argument
- compares the equality caller object to argument object
- objects are equal if their time is the same

*/

class Clock {
  constructor(hour, minutes = 0) {
    this.hour = hour;
    this.minutes = minutes;
  }

  static hrsInDay = 24;
  static minsInDay = 1440;

  static at(hour, minutes) {
    return new Clock(hour, minutes);
  }

  add(mins) {
    let total = this.minutes + mins;
    let remainderMins = total % 10;
    let addHours = Math.floor(total / 60);

    if (total < 60) {
      this.minutes += mins;
    } else if (total > 60) {
      this.hour += addHours;
      this.hour = this.standardizeHours(this.hour);
      this.minutes += remainderMins;
    }
    return this;
  }

  subtract(mins) {
    let total = this.minutes - mins;
    let subtractHours = Math.floor(total / 60) * -1;
    let remainderMins = mins - subtractHours * 60;

    if (total < 60 && total > 0) {
      this.minutes -= mins;
    } else if (total < 0) {
      this.hour -= subtractHours;
      this.hour = this.standardizeHoursSubtract(this.hour);
      this.minutes -= remainderMins;
    }
    return this;
  }

  standardizeHoursSubtract(hours) {
    let standardized = hours;

    while (standardized < 0) {
      standardized += Clock.hrsInDay;
    }
    return standardized;
  }

  standardizeHours(hours) {
    let standardized = hours;

    if (standardized === 24) {
      standardized = 0;
    }

    while (standardized > Clock.hrsInDay) {
      standardized -= Clock.hrsInDay;
    }
    return standardized;
  }

  isEqual(clock) {
    return this.hour === clock.hour && this.minutes === clock.minutes;
  }

  toString() {
    let strHour = String(this.hour);
    let strMins = String(this.minutes);

    strHour = strHour.length === 1 ? "0" + strHour : strHour;
    strMins = strMins.length === 1 ? "0" + strMins : strMins;

    return `${strHour}:${strMins}`;
  }
}

module.exports = Clock;
