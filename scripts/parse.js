let stars_table = document.querySelectorAll("table")[3];
let rows = stars_table.rows;

// use deprecated bgColor property because NTU site still uses it
// initialise variables
let currentColor = "";
let course = "";
let title = "";
let AUs = "";
let courseType = "";
let classType = "";
let group = "";
let day = "";
let time = "";
let venue = "";
let remark = "";
let exam = "";
let rest;
let blank;

let parsedData = {};
// store parsed data in a nested object, key is course id,
// children are title, aus, course type, and an array of objects called details which contains
// class type
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
    let obj = { title, AUs, courseType, details: [] };
    parsedData[course] = obj;
  }
  // then add the details to the object
  [classType, group, day, time, venue, remark, exam] = [...row.cells]
    .map((item) => item?.children[0]?.innerText)
    .slice(10);
  let detail = { classType, group, day, time, venue, remark, exam };
  parsedData[course]["details"].push(detail);
}
alert(JSON.stringify(parsedData));
