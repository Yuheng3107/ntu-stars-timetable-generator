import ical from 'ical-generator';

let stars_table = document.querySelectorAll('table')[3];
let rows = stars_table.rows;
let h2 = document.querySelector('h2').innerText;
let [academicYear, semester] = h2.split(',');
const calendar = ical({ name: 'NTU Course Timetable' });
let icalData = `BEGIN:VCALENDAR
VERSION:2.0
X-WR-CALNAME:NTU Modules Calendar
X-APPLE-CALENDAR-COLOR:#FF2968
BEGIN:VEVENT
CREATED:20230730T140016Z
DTEND;TZID=Asia/Singapore:20230815T112000
DTSTAMP:20230730T140028Z
DTSTART;TZID=Asia/Singapore:20230815T093000
LAST-MODIFIED:20230730T140027Z
LOCATION:NH SR2
RRULE:FREQ=WEEKLY;UNTIL=20231201T032000Z
SEQUENCE:1
SUMMARY:RE1015 Chem and Bio Eng Fund and App Seminar
UID:03F1B517-7448-4421-8D69-789597CD15E4
URL;VALUE=URI:
END:VEVENT
BEGIN:VEVENT
CREATED:20230730T135855Z
DTEND;TZID=Asia/Singapore:20230816T122000
DTSTAMP:20230730T135859Z
DTSTART;TZID=Asia/Singapore:20230816T093000
LAST-MODIFIED:20230730T135855Z
LOCATION:NH SR2
RRULE:FREQ=WEEKLY;UNTIL=20231127T042000Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:RE1014 Electronic and Information Engineering
UID:0E478BCD-722F-4AF4-8998-AF210116DAB3
END:VEVENT
BEGIN:VEVENT
CREATED:20230730T135100Z
DESCRIPTION:Group S
DTEND;TZID=Asia/Singapore:20230815T152000
DTSTAMP:20230730T135302Z
DTSTART;TZID=Asia/Singapore:20230815T133000
LAST-MODIFIED:20230730T135302Z
LOCATION:NH SR2
RRULE:FREQ=WEEKLY;UNTIL=20231207T053000Z
SEQUENCE:0
SUMMARY:RE1011 Mathematics I Seminar
UID:73BB567C-2C05-40CD-8416-0F97FA736D3F
END:VEVENT
BEGIN:VEVENT
CREATED:20230730T134831Z
DTEND;TZID=Asia/Singapore:20230804T162000
DTSTAMP:20230730T134831Z
DTSTART;TZID=Asia/Singapore:20230804T133000
LAST-MODIFIED:20230730T134831Z
LOCATION:RPR SR2
RRULE:FREQ=WEEKLY;UNTIL=20231207T053000Z
SEQUENCE:0
SUMMARY:RE0011 Writing Across The Disciplines
UID:7BA6C99B-DB4F-4AB9-AFC1-01C8DA172961
URL;VALUE=URI:
END:VEVENT
BEGIN:VEVENT
CREATED:20230730T135631Z
DTEND;TZID=Asia/Singapore:20230817T162000
DTSTAMP:20230730T135632Z
DTSTART;TZID=Asia/Singapore:20230817T133000
LAST-MODIFIED:20230730T135631Z
RRULE:FREQ=WEEKLY;UNTIL=20231124T082000Z
SEQUENCE:0
SUMMARY:RE1013 Materials and Manufacturing
UID:A4EF5D95-D787-4965-91BD-328CE82533AD
URL;VALUE=URI:
END:VEVENT
BEGIN:VEVENT
CREATED:20230730T135513Z
DTEND;TZID=Asia/Singapore:20230817T112000
DTSTAMP:20230730T135514Z
DTSTART;TZID=Asia/Singapore:20230817T093000
LAST-MODIFIED:20230730T135513Z
LOCATION:NH SR1
RRULE:FREQ=WEEKLY;UNTIL=20231201T032000Z
SEQUENCE:0
SUMMARY:RE1011 Mathematics I Tutorial
UID:AB26B8D7-E61D-4675-B0CA-34809387DAD6
URL;VALUE=URI:
END:VEVENT
BEGIN:VEVENT
CREATED:20230730T134534Z
DESCRIPTION:T57
DTEND;TZID=Asia/Singapore:20230728T122000
DTSTAMP:20230730T134615Z
DTSTART;TZID=Asia/Singapore:20230728T103000
LAST-MODIFIED:20230730T134614Z
LOCATION:LHN-TR+36 [Tutorial Room + 36 (The Arc)]
RRULE:FREQ=WEEKLY;UNTIL=20231207T042000Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:CC0002 Navigating the Digital World
UID:DA68D357-83BD-4A75-BC17-02A859F7319C
END:VEVENT
BEGIN:VEVENT
CREATED:20230730T140128Z
DTEND;TZID=Asia/Singapore:20230815T122000
DTSTAMP:20230730T140129Z
DTSTART;TZID=Asia/Singapore:20230815T113000
LAST-MODIFIED:20230730T140128Z
LOCATION:NH SR2
SEQUENCE:0
SUMMARY:RE1015 Chem and Bio Eng Fund and App Tutorial
UID:E57BD342-88B2-499A-8E6E-6D674B37A516
URL;VALUE=URI:
END:VEVENT
BEGIN:VEVENT
CREATED:20230730T140255Z
DTEND;TZID=Asia/Singapore:20230814T172000
DTSTAMP:20230730T140255Z
DTSTART;TZID=Asia/Singapore:20230814T143000
LAST-MODIFIED:20230730T140255Z
LOCATION:RPR SR1
RRULE:FREQ=WEEKLY;UNTIL=20231201T092000Z
SEQUENCE:0
SUMMARY:RE1101 Fundamentals of Management Seminar
UID:F9CDD2DE-17E2-480B-B745-B862F74F77A4
URL;VALUE=URI:
END:VEVENT
BEGIN:VTIMEZONE
TZID:Asia/Singapore
X-LIC-LOCATION:Asia/Singapore
BEGIN:STANDARD
DTSTART:19010101T000000
RDATE:19010101T000000
TZNAME:SMT
TZOFFSETFROM:+065525
TZOFFSETTO:+065525
END:STANDARD
BEGIN:STANDARD
DTSTART:19050601T000000
RDATE:19050601T000000
TZNAME:+07
TZOFFSETFROM:+065525
TZOFFSETTO:+0700
END:STANDARD
BEGIN:DAYLIGHT
DTSTART:19330101T000000
RDATE:19330101T000000
TZNAME:+0720
TZOFFSETFROM:+0700
TZOFFSETTO:+0720
END:DAYLIGHT
BEGIN:STANDARD
DTSTART:19360101T000000
RDATE:19360101T000000
TZNAME:+0720
TZOFFSETFROM:+0720
TZOFFSETTO:+0720
END:STANDARD
BEGIN:STANDARD
DTSTART:19410901T000000
RDATE:19410901T000000
TZNAME:+0730
TZOFFSETFROM:+0720
TZOFFSETTO:+0730
END:STANDARD
BEGIN:STANDARD
DTSTART:19420216T000000
RDATE:19420216T000000
TZNAME:+09
TZOFFSETFROM:+0730
TZOFFSETTO:+0900
END:STANDARD
BEGIN:STANDARD
DTSTART:19450912T000000
RDATE:19450912T000000
TZNAME:+0730
TZOFFSETFROM:+0900
TZOFFSETTO:+0730
END:STANDARD
BEGIN:STANDARD
DTSTART:19820101T000000
RDATE:19820101T000000
TZNAME:+08
TZOFFSETFROM:+0730
TZOFFSETTO:+0800
END:STANDARD
END:VTIMEZONE
END:VCALENDAR
`;
// get academic Year and semester so that can input start and end date
// store information about start and end dates in dates object, key is academicYear
// information was taken from NTU website
let dates = {
  'Academic Year 2023': {
    'Semester 1': {
      startDate: new Date(2023, 8, 14),
      endDate: new Date(2023, 11, 17),
    },
    'Semester 2': {
      startDate: new Date(2024, 1, 15),
      endDate: new Date(2024, 4, 19),
    },
  },
  'Academic Year 2024': {
    'Semester 1': {
      startDate: new Date(2024, 8, 12),
      endDate: new Date(2024, 11, 15),
    },
    'Semester 2': {
      startDate: new Date(2025, 1, 13),
      endDate: new Date(2025, 4, 18),
    },
  },
  'Academic Year 2025': {
    'Semester 1': {
      startDate: new Date(2025, 8, 11),
      endDate: new Date(2025, 11, 14),
    },
    'Semester 2': {
      startDate: new Date(2026, 1, 12),
      endDate: new Date(2026, 4, 17),
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

let parsedData = [
  ['Subject', 'Start Date', 'Start Time', 'End Date', 'End Time'],
];
// parsedData is an array of arrays containing csv data
// gets rid of first row which is irrelevant as it only contains header data
rows = [...rows].slice(1);
for (let row of rows) {
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
}

alert('Hi');
