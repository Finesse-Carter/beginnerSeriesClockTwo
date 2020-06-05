/*Create a function called one that accepts two params:

a sequence
a function
and returns true only if the function in the params returns true for exactly one (1) item in the sequence.

Example
one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten) -> true
one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) -> false
one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) -> false
If you need help, here is a resource ( in Ruby ). */


function one(arr, fun){
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (fun(arr[i]) === true) {
        count += 1;
        }
      }
    if (count === 1) {
      return true;
      }
    else {
      return false;
      }
  }
  
  
  
  
  
 