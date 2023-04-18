"use strict";

let hours = 50;
let wage = 10;
let totalPaycheck = null;

if (hours <= 40) {
  totalPaycheck = hours * wage;
  console.log(totalPaycheck);
} else if (hours > 40) {
  let extraHours = (hours - 40) * 1.5;
  totalPaycheck = (40 + extraHours) * wage;
  console.log(totalPaycheck);
}

let howManyDays = Math.ceil(1000000 / totalPaycheck);

console.log(howManyDays);

let howManyWeeks = Math.ceil(howManyDays / 7);

console.log(howManyWeeks);
