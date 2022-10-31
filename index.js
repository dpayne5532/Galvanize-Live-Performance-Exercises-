
// for (var i = 1; i <= 12; i++) {
//   console.log(i, "mph", Math.ceil(60 / i * 3.1) , "Minutes")
//   console.log( )
// }


function rotateString(str1, str2) {

  let result = "";
  for (var d = 1; d < str2.length; d++){
  
    for (var i = d; i < str2.length; i++) {
      result += str2[i];
    }
    for (var j = 0; j < d; j++) {
      result += str2[j];
    }
    
    // console.log("result string:", result);
    
    if (str1 === result) {
      return true;
    } else {
      result = "";
    }
  }
  
  return false;
}

// 10 characters 2 - 10, add 1, 3 - 10, add 1 and 2, 



// Is one string a rotated version of another?

// For example:
console.log(rotateString('hello world', 'orldhello w') )




// function findPairForSum(arr, n) {
//   let result = [];
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === n) {
//         result.push(arr[i])
//         result.push(arr[j])
//       }
//     }
//   }
//   return result;
// }




// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// Example:

// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]











// function transposeTwoStrings(arr) {
//   word1 = arr[0];
//   word2 = arr[1];
//   let result = "";
//   for (var i = 0; i < word1.length; i++) {
//     result += word1[i] + " " + word2[i] + "\n";
//   }
//   return result;
// }

// console.log(transposeTwoStrings(['Hello','World']));

// should return:
// H W  
// e o  
// l r  
// l l  
// o d








// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

// The return value should be 1-indexed, not 0-indexed.

// function detectOutlierValue(str) {
//   let evenResult = 0;
//   let oddResult = 0;
//   let odds = 0;
//   let evens = 0;
//   let a = str.split(" ");
//   for (var i = 0; i < a.length; i++) {
//     if (a[i] % 2 === 0) {
//       evens += 1;
//       evenResult = i;
//     } else if (a[i] % 2 !== 0) {
//       odds += 1;
//       oddResult = i;
//     }
    
//   }

//   if (odds === 1) {
//     return oddResult + 1;
//   } else {
//     return evenResult + 1;
//   }
// }



// // Examples :
// console.log(detectOutlierValue("2 4 7 8 10")); // => 3 - Third number is odd, while the rest of the numbers are even
// console.log(detectOutlierValue("1 10 1 1"));  //=> 2 - Second number is even, while the rest of the numbers are odd












// function flipEveryNChars(str, n) {
//   let result = "";
//   for (var i = 0; i < str.length; i += n) {
//     for (var j = n - 1; j >= 0; j -= 1) {
//       if (str[i + j] !== undefined) {
//       result += str[i + j]
//       }
//     }
//   }
//   return result;
// }

// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// Note that this is intentionally very similar to the previous problem.

// Please focus on getting a working solution with the tools you know well.

// Practice the interactive/collaborative interview style that's described in the documentation.

// Example:
// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'











// Flip every pair of characters in a string.

// function flipPairs(str) {
//   // create return string
//   // iterate through string
//     // add each pair of letters to return string backwards
//   //return string

//   let result = "";
//   for (var i = 0; i < str.length; i+= 2) {
//     if (str[i + 1] !== undefined) {
//     result += str[i + 1] + str[i];
//     } else if (str[i + 1] === undefined) {
//       result += str[i];
//     }
    
    
//   }
//   return result;
// }


// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!