//        Functions in JavaScript....
// function hello(){
//     console.log("Hello....");
// }
// hello();

// Qs.
// function poem(){
//     console.log("Twinkle twinklw little star how i wonder  what you are......");
// }
// poem();

// Q.
// function roll(){
//     let dice = Math.floor(Math.random()*6)+1;
//     console.log(dice);
// }
// roll();

//                    Function with argument...
// function funcName(a,b){
//     let sum = a+b;
//     console.log(sum);
// }
// funcName(2,43);

// Q.
// function average(a,b,c){
//     console.log((a+b+c)/3);
// }
// average(90,3,3);

// Q.
// function multiple(n){
//     for(let i=n;i<=n*10;i=i+n){
//         console.log(i);
//     }
// }
// multiple(8);

//  Function return........
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,4));
// console.log(sum(sum(2,4),4));

// function sum(n){
//     let sum = 0;
//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(sum(5));

// Qs.
// let arr = ["Anu","Pama","Vanraj","Anuj"];
// function concat(arr){
//     let result = "";
//     for(let i=0;i<arr.length;i++){
//         result = result + arr[i];
//     }
//     return result;
// }
// console.log(concat(arr));

//  SCOPE
// global and function scope...
// let sum = 45;
// function calSum(a,b){
//     let sum = a+b;
//     console.log(sum);
// }
// calSum(4,5);
// console.log(sum);


//                                Lexical scope...
// function outer(){
//     let x=9;
//     let y=80;
//     function inner(){
//         console.log(x);
//     }
//     inner();
// }
// outer();

// let greet = "hello";
// function changeGreet(){
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
//     innerGreet();
// }
// console.log(greet);
// changeGreet();

//                             Higher order function..
// function multiGreet(func,n){
//     for(let i=0;i<=n;i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("Namaste");
// }
// multiGreet(greet,5);

//                           function returning function...

// function oddEvenTest(req){
//     if(req == "odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }
//     else if(req == "even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }
//     else{
//         console.log("Wrong request")
//     }
// }

// Actions that can be performed on an object.......
// const calculator = {
//     add : function(a,b){
//         return a+b;
//     },
//     sub : function(a,b){
//         return a-b;
//     },
//     multi : function(a,b){
//         return a*b;
//     },
//     div : function(a,b){
//         return a/b;
//     }
// };
// console.log(calculator.sub(9,3));

//                          Practice question.....
// Qs1. Write a JavaScript function that returns array elements larger than a number.

// let arr = [1,2,3,45,6,78,32,20];
// let num = 69;

// function greatNumber(arr,num){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
// }
// greatNumber(arr,num);

// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

// let str = "rrtyuiovsvkhh";
// function uniqueStr(strr){
//     let a = "";
//     for(let i=0;i<str.length;i++){
//         let currChar =  str[i];
//         if(a.indexOf(currChar) == -1){
//             a = a  + currChar;
//         }
//     }
//     return a;
// }
// console.log(uniqueStr(str));

// Qs3. Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output : 
// "United States of America"

// let country = ["Australia", "Germany", "United States of America"];

// function biggestName(arr){
//     let a = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[0].length<arr[i].length){
//             a = i;
//         }
//     }
//     return arr[a];
// }
// console.log(biggestName(country));

// Qs4. Write a JavaScript function to count the number of vowels in a String 
//      argument.
// let str = "advjdeiou";
// function vowels(st){
//     let count =0;
//     for(let i=0;i<st.length;i++){
//         let currChar = st[i];
//         if(currChar=='a'||currChar=='e'||currChar=='i'||currChar=='o'||currChar=='u'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(`"${str}" has `,vowels(str),"Numbers of vowels init.");

// Qs5. Write a JavaScript function to generate a random number within a range 
// (start, end).

// function randNum(start,end){
//     return Math.floor(Math.random()*(end-start))+start
// }
// console.log(randNum(100,200));






















