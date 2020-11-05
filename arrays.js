var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var newArray = [];

var function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

var function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}
var function accessElementInArray() {
  
}