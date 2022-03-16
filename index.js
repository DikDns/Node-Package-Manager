import _ from "lodash";

const numbers = [15, 21, 95, 4, 46, 48, 72, 89, 96, 69];

_.each(numbers, (number, i) => {
  console.log(number);
});
