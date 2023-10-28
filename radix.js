function radixSort(arr) {
  //turn the numbers into strings
  let strArr = arr.map(num => num.toString())

  //find max length (most digits)
  let maxDig = 0
  for(let str of strArr){
    maxDig = Math.max(str.length, maxDig)
  }

  let padded = []

  for(let str of strArr){
    padded.push(str.padStart(maxDig, '0'))
  }
  

  for(let i = maxDig-1; i >= 0; i--){
    let buckets = {}
    let sort = []
    
    for(let str of padded){
      if(!buckets[str[i]]){
        buckets[str[i]] = [str]
      }
      else{
        buckets[str[i]].push(str)
      }
    }
    let keys = Object.keys(buckets)
   
    for(let key of keys){
      for(let num of buckets[key]){
        sort.push(num)
       
      }
    }
    
    padded = sort
  }
  
  let result = []

  for(let str of padded){
    result.push(parseInt(str))
  }
  return result
}

function getDigit(num, dig){
  let str = num.toString()
  let revIndex = parseInt(str[str.length-1-dig]);
  return revIndex ? revIndex : 0
}

function digitCount(num){
  let str = num.toString();
  return str.length
}

function mostDigits(arr){
  let strArr = arr.map(num => num.toString())

  //find max length (most digits)
  let maxDig = 0
  for(let str of strArr){
    maxDig = Math.max(str.length, maxDig)
  }
  return maxDig;
}


module.exports = {getDigit, digitCount, mostDigits, radixSort}