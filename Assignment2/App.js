// (Question NO 1)

// function reverse_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(Number(reverse_number(32243)));

// (Question No 2)

// var userName = prompt( "Enter your name in palantrum");
// var reverse = userName.split("");
// var rever = reverse.reverse()
// var joint = rever.join("")
// if(userName === joint){
//     alert("this is correct")
// }
// else{
//     alert("this is worng answer")
// }

// (Question no 3)

// function substrings(strings)
// {
// var array = [];
//   for (var x = 0, y=1; x < strings.length; x++,y++) 
//   {
//    array[x]=strings.substring(x, y);
//     }
// var combi = [];
// var temp= "";
// var slent = Math.pow(2, array.length);

// for (var i = 0; i < slent ; i++)
// {
//     temp= "";
//     for (var j=0;j<array.length;j++) {
//         if ((i & Math.pow(2,j))){ 
//             temp += array[j];
//         }
//     }
//     if (temp !== "")
//     {
//         combi.push(temp);
//     }
// }
//   console.log(combi.join("\n"));
// }

// substrings("dog");

// // (Questin No 4)
// function alphabet(string)
//   {
// return string.split('').sort().join('');
//   }
// console.log(alphabet("webmaster"));

//( Question No 5 )

// function uppercase(string)
// {
//   var array = string.split(' ');
//   var newarray = [];
    
//   for(var x = 0; x < array.length; x++){
//       newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
//   }
//   return newarray.join(' ');
// }
// console.log(uppercase("the quick brown fox"));

//(Question NO 6)

// function find_longest_word(string)
// {
//   var array = string.match(/\w[a-z]{0,}/gi);
//   var result = array[0];

//   for(var x = 1 ; x < array.length ; x++)
//   {
//     if(result.length < array[x].length)
//     {
//     result = array[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));

//(Question N0 7)

// function vowel(str)
// {
//   var vowellist = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str.length ; x++)
//   {
//     if (vowellist.indexOf(str[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel("The quick brown fox"));

//(question N0 8)

// function testprime(n)
// {

//   if (n===1)
//   {
//     return false;
//   }
//   else if(n === 2)
//   {
//     return true;
//   }else
//   {
//     for(var x = 2; x < n; x++)
//     {
//       if(n % x === 0)
//       {
//         return false;
//       }
//     }
//     return true;  
//   }
// }

// console.log(testprime(7));

//(Question N0 9)

// function detectdatatype(value)
// {
// var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
// if (typeof value === "object" || typeof value === "function") 
//     {
//      for (x = 0, len = dtypes.length; x < len; x++) 
//      {
//             if (value instanceof dtypes[x])
//             {
//                 return dtypes[x];
//             }
//       }
//     }
    
//     return typeof value;
// }
// console.log(detectdatatype(10));
// console.log(detectdatatype());
// console.log(detectdatatype('w3resource'));
// console.log(detectdatatype(false));

//(Question N0 10)

// function SecondGreatestLowest(arrnum)
// {
//   arrnum.sort(function(x,y)
//            {
//            return x-y;
//            });
//   var uniqa = [arrnum[0]];
//   var result = [];
  
//   for(var j=1; j < arrnum.length; j++)
//   {
//     if(arrnum[j-1] !== arrnum[j])
//     {
//       uniqa.push(arrnum[j]);
//     }
//   }
//     result.push(uniqa[1],uniqa[uniqa.length-2]);
//   return result.join(',');
//   }

// console.log(SecondGreatestLowest([1,2,3,4,5]));
