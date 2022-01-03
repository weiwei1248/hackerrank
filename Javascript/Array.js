.reverse() // change original
.sort() // sort by string & change origianl
.filter() //return new array
.map() //return new array
.pop() //delete last
.shift() //delete first
.concat() //combine 2 arrays, return new array

.reduce() //sum
/***
const reducer = (previousValue, currentValue) => previousValue + currentValue;
array.reduce(reducer);
***/

.slice(begin,end) //return new array, end not include
/***
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
animals.slice(-2); //["duck", "elephant"]
animals.slice(2, -1) //["camel", "duck"]
***/


.splice(index,delete,replace) //change original
