const { format, addWeeks } = require("date-fns");

export function getCurrentDate() {
  return new Date();
}

export function getLastWeeksDate() {
  return addWeeks(new Date(), -1);
}

export function getYear(date) {
  return format(date, "YYYY");
}

export function getMonth(date) {
  return format(date, "MM");
}

export function getDay(date) {
  return format(date, "DD");
}

export function formatForSearch(date) {
  return format(date, "YYYY-MM-DD");
}
