"use strict";

const name = "Mitch Cuckovich";
const age = 25;
const birthday = "January 24";
const pineapplePizza = false;
const lifeEvents = [
  "I was born in Troy, Michigan",
  "I went to Hope College",
  "I participated in junior olympics when i was 10 years old",
  "I love to be in nature",
];

if (pineapplePizza === true) {
  console.log(
    `My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

const counter = 0;

while (counter === true) {
  let randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber !== 5) {
    console.log("randomNumber !== 5");
    counter++;
  } else {
    console.log(
      `5 === 5, it took ${counter} iterations to randomly generate the number 5`
    );
    counter++;
  }
  break;
}
