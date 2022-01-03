/**********
purpose: 
Compare date in object

data:
array: [{date:'2020-09-08'}, {date:'2020-01-05'}];
**********/

function Main(array) {
  array.sort(function(a,b) {
    return new Date(b.date) - new Date(a.date)
  });
}