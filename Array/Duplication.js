/**********
purpose: 
Delete the duplication

data:
array: ['ss','fff','aaa','ss'];
**********/

function Main(array) {
  array.filter((item,index) => array.indexOf(item) == index)
} 