var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var newArray = [];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}
function accessElementInArray(array, index) {
  return array[index]
}