//            For each
// let arr = [6,7,18,9,7,2,12,0];
// function print(el){
//     console.log(el);
// }
// arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el);
// })

// arr.forEach((el)=>{
//     console.log(el);
// })

//               For each in array object....
// let arr = [{
//     name:"Anubhav",
//     marks:90,
//     },
//     {
//         name:"Rohit",
//         marks:78,
//     },
//     {
//         name:"Purnima",
//         marks:67,
//     }
// ];
// arr.forEach((student)=>{
//     console.log(student.marks);
// });

//            Map...
// let num = [12,34,56,7,8,9];
// let double = num.map((el)=>{
//     return el*2;
// });

//           Filter...
// let newArr = [12,33,4,5,6,78,9];
// let even = newArr.filter((num)=>
//     (num%2!=0));
// console.log(even);

//          Every.. (logical AND)
// [1,2,3,4,5,6].every((el)=>(el%2==0));
// false
// [2,4,6].every((el)=>(el%2==0));
// True

//        some.. (logical OR)
// let a = [1,2,3,4,5,6].some((el)=>(el%2==0));
// console.log(a);

// let b = [1,3,5,7].some((el)=>(el%2==0));
// console.log(b);

//          Reduce...          ______.reduce(accumulator,element)
// let arr = [1,2,3,4,5];
// let finalVal = arr.reduce((res,el)=>res+el);
// console.log(finalVal);

// Maximum value 
// let arr = [12,3,44,3,22,67,89,9000];
// let max = arr.reduce((res,el)=>{
//     if(res<el){
//         return el;
//     }
//     else{
//         return res;
//     }
// });
// console.log(max);

// Qs...
// let arr = [10,40,80,90,,40,893];
// console.log(arr.every((el)=>(el%10==0)));

// Qs...
// let arr = [12,34,5,6,7,89];
// let min = arr.reduce((res,el)=>{
//     if(res<el){
//         return res;
//     }
//     else{
//         return el;
//     }
// });
// console.log(min);

//                Default parameters
// function sum(a,b=9){
//     return a+b;
// }
// console.log(sum(9));

//                   Spread......
// let arr = [1,2,3,4,5,0,34,5];
// console.log(Math.max(...arr));

// console.log(..."Anubhav");

//       Spread with array literals

// let arr = [1,2,4,5,67,89];
// let arrNew = [...arr];
// console.log(arrNew);

// let chars = [..."Hello"];
// console.log(chars);

// multiple array insinde a single array
// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// let merged = [...odd,...even];
// console.log(merged);

//                  spread with object literals....
// const data = {
//     email : "rajsinghrajput7002@gmail.com",
//     password : "raj1234567",
// };
// let copy = {...data,id : 12,country : "India"};
// console.log(copy);

// Array to object then its index value.

// let arr = [1,2,3,4,5,67,61,23];
// let obj1 = {...arr};

// console.log(obj1);

//                                  Rest
// function sum(...args){
//     for(let i=0;i<args.length;i++){
//         console.log("You gave us : ",args[i]);
//     }
// }
// sum(1,2,4,5,678,90,91,73);

// function min(){
//     console.log(arguments);
//     console.log(arguments.length);
// }
// min(1,2,3,4,56);

// Qs. print sum 

// function sum(...args){
//     return args.reduce((sum,el)=>sum+el);
// }
// console.log(sum(12,3,4,5,6,7,8,90));

// Qs. print min number....
// function min(...args){
//     return args.reduce((min,el)=>{
//         if(min>el){
//             return el;
//         }
//         else{
//             return min;
//         }
//     });
// }
// console.log(min(12,34,54,11,10));

//                         Destructuring...
// let nam = ["Anubhav","Singh","Rajput","Raj","Singh","Rajput"];
// let [winner,runnerup,...other] = nam;
//  nam[0] == winner;

//                         Destructuring objects
// const student = {
//     nam : "Karan",
//     age : 18,
//     class : 9,
//     subject : ["accc","kcbadk","ancljn"],
//     username : "karan@1234",
//     password : "1212121",
//     city : "Kolkata",
// };

// let {username : user,password : pass,city : place = "Mumbai"} = student;



// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.

// let arr = [1,2,3,4,5,6];
// let sq = arr.map(function (el){
//     return el**2;
// });
// console.log(sq);
// let sum = sq.reduce((sum,el)=>sum+el);
// console.log(sum);

// let avg = sum/sq.length;
// console.log(avg);

// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.

// let arr = [1,2,3,4,5];
// let plus5 = arr.map((el)=>{return el+5;} );
// console.log(plus5);

// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.

// let str = ["aedde","ewd","edw","dxwww"];
// let upper = str.map((el)=>{
//     return el.toLocaleUpperCase();
// });

// console.log(upper);

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled

// const doubleAndReturnArgs = (arr,...args)=>[
//     ...arr,
//     ...args.map((v)=>v*2),
// ];

// console.log(doubleAndReturnArgs([1,34,5,6],6,7,8,9));


// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object.

// const mergeObjects = (obj1,obj2)=>({
//     ...obj1,...obj2
// });

// console.log(mergeObjects({a:12,b:34,c:90},{aa:34,bb:67,cc:35}));