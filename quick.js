/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr){
  if(arr.length <= 1) return arr
  const [pivotEl, ...rest] = arr;
  const less = [];
  const greater = [];
  for(let el of rest){
    if(el < pivotEl){
      less.push(el)
    }
    else{
      greater.push(el)
    }
  }

  const pivotedArray = [...less, pivotEl, ...greater]
  for(let i = 0; i < pivotedArray.length; i++){
    arr[i] = pivotedArray[i]
  }

  return less.length;
  
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr) {
  if(arr.length <= 1) return arr
  const pi = pivot(arr)

  return [...quickSort(arr.slice(0, pi)), arr[pi], ...quickSort(arr.slice(pi+1))]
  

}

module.exports = {pivot, quickSort};