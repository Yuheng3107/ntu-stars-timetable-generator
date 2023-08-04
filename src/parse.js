import ical from 'ical-generator';

let stars_table = document.querySelectorAll('table')[3];
let rows = stars_table.rows;
let h2 = document.querySelector('h2').innerText;
let [academicYear, semester] = h2.split(',');
const calendar = ical({ name: 'NTU Course Timetable' });
calendar.timezone({
  name: 'Asia/Singapore',
});
// get academic Year and semester so that can input start and end date
// store information about start and end dates in dates object, key is academicYear
// information was taken from NTU website
let dates = {
  'Academic Year 2023': {
    'Semester 1': {
      startDate: new Date(2023, 7, 14),
      endDate: new Date(2023, 10, 17),
    },
    'Semester 2': {
      startDate: new Date(2024, 0, 15),
      endDate: new Date(2024, 3, 19),
    },
  },
  'Academic Year 2024': {
    'Semester 1': {
      startDate: new Date(2024, 7, 12),
      endDate: new Date(2024, 10, 15),
    },
    'Semester 2': {
      startDate: new Date(2025, 0, 13),
      endDate: new Date(2025, 3, 18),
    },
  },
  'Academic Year 2025': {
    'Semester 1': {
      startDate: new Date(2025, 7, 11),
      endDate: new Date(2025, 10, 14),
    },
    'Semester 2': {
      startDate: new Date(2026, 0, 12),
      endDate: new Date(2026, 3, 17),
    },
  },
};
// use deprecated bgColor property because NTU site still uses it
// initialise variables
let currentColor = '';
let course = '';
let title = '';
let AUs = '';
let courseType = '';
let classType = '';
let group = '';
let day = '';
let time = '';
let venue = '';
let remark = '';
let exam = '';
let rest;
let blank;

// gets rid of first row which is irrelevant as it only contains header data
rows = [...rows].slice(1);
for (let row of rows) {
  // break out of loop if we reach the end
  if (row === rows[rows.length - 1]) break;
  // check whether bgColor has changed, if it has, means it is a new mod
  if (row.bgColor !== currentColor) {
    // update current color
    currentColor = row.bgColor;
    // record info of new mod
    // spread cells using spread operator into an array because row.cells is HTMLCollection

    // then destructure the stuff into an array
    [blank, course, title, AUs, courseType, ...rest] = [...row.cells].map(
      (item) => item?.children[0]?.innerText
    );
  }
  // then add the details to the object
  [classType, group, day, time, venue, remark, exam] = [...row.cells]
    .map((item) => item?.children[0]?.innerText)
    .slice(10);
  let [startTime, endTime] = time.split('to');
  let startHour = startTime.slice(0, 2);
  let startMinute = startTime.slice(2);
  let endHour = endTime.slice(0, 2);
  let endMinute = endTime.slice(2);
  // get the nearest date from the start of the sem which corresponds to the day of
  let startDate = getDateFromDayOfWeek(
    dates[academicYear][semester]['startDate'].toString(),
    day
  );
  startDate.setHours(startHour, startMinute);
  let endDate = new Date(startDate.toString());
  endDate.setHours(endHour, endMinute);

  calendar.createEvent({
    start: startDate,
    end: endDate,
    location: `${venue}`,
    summary: `${course} ${title}`,
    description: `Class Type: ${classType} \n Group: ${group} \n Remarks: ${remark} \n Exam: ${exam} \n AUs: ${AUs}`,
    repeating: 'WEEKLY',
    until: dates[academicYear][semester]['endDate'],
  });
}

let url = calendar.toURL();
console.log(url);
chrome.runtime.sendMessage({ action: 'downloadFile', url: 'URL_TO_DOWNLOAD' });
function getDateFromDayOfWeek(date, day) {
  // make use of the fact that semester always starts from monday
  let daysToAdd = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5 };
  let modifiedDate = new Date(date);
  modifiedDate.setDate(modifiedDate.getDate() + Number(daysToAdd[day]));
  return modifiedDate;
}
