const {
  format,
  addWeeks
} = require('date-fns')

export function getCurrentDate () {
  //return format(new Date(), 'YYYY-MM-DD')
  return new Date()
}

export function getLastWeeksDate () {
  //return format(addWeeks(new Date(), - 1), 'YYYY-MM-DD')
  return addWeeks(new Date(), -1)
}

export function getYear (date) {
  return format(date, 'YYYY')
}

export function getMonth (date) {
  return format(date, 'MM')
}

export function getDay (date) {
  return format(date, 'DD')
}

