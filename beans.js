function changeArr(arr){

    for(let i = 0; i < arr.length; i++){
      arr[i] = 'b'
    }
    console.log('changeArr arr', arr)
    return 2
}

function lookAtArr(arr, repeat=false){
  console.log('heres my arr', arr);
  let num = changeArr(arr);
  console.log('did it change?', arr)
  
}

module.exports = {
  changeArr, lookAtArr
}

