/**********
purpose: 
Compare value in object

data:
object:{a:12,b:24,c:9};
**********/

function Main(object) {
  const sorted = Object.keys(object).sort(function(a,b) {
  	return object[a] - object[b]
  })
}