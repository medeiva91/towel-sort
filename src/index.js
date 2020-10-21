
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix) {
    let count = 1;
    let result = matrix.reduce(function(arr, current){
      if (count%2 == 0) {
        current = current.reverse();
      }
      arr = arr.concat(current);
      count++;
      return arr
    }, [])
      return result;
   } else {
     return [];
   }
}
