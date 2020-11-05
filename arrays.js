var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var newArray = [];

var addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

var destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array
}