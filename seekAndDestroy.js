/*
Challenge:
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

*/
var toFilter;
function myFilter(val){
    return val != toFilter;
}

function destroyer(arr) {
    //for each remaining arrguments
    for (y = 1; y < arguments.length; y++){
        toFilter = arguments[y];
        arr = arr.filter(myFilter);
    }
  return arr;
}

var res = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
print (res);
