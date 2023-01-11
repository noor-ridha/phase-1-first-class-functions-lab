// Code your solution in this file!
const drivers = ["Dalia", "Jad", "Sam"];
const returnFirstTwoDrivers = (drivers) => {
  return [drivers[0], drivers[1]];
};
const returnLastTwoDrivers = (drivers) => {
  let lastElements = drivers.slice(-2);
  return lastElements;
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function (number) {
    return number * num;
  };
}
function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers);
}

// const fareDoubler = (createFareMultiplier) =>{

// }

function fareDoubler(num) {
  return num * 2;
}
function fareTripler(num) {
  return num * 3;
}
