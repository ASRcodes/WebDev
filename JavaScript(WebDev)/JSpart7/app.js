//                   this keyword in javascript..
// const student = {
//     phy :45,
//     che : 90,
//     maths : 89,
//     getAvg(){
//         let avg = (this.phy+this.che+this.maths)/3;
//         console.log(avg);
//     }
// }

//                       try and catch
// try{
//     console.log(a);
// }
// catch(e){
//     console.log(e);
// }

//                       Miscellaneous 
// (Arrow function)
// const fun = (a,b)=>{console.log(a+b);}
// fun(5,8);

// const cube = n =>{return n*n*n};
// console.log(cube(6));

// implicit return...
// const pow = (a,b)=>(a**b);
// console.log(pow(9,2));

//                      setTimeout function....

// setTimeout(()=>{
//     console.log("Anubhav");
// },2000);

//                      setInterval function....

// let id = setInterval(()=>{
//     console.log("Yaay yaay!!");
// },2000);
// console.log(id);

//          this with arrow and normal function...
// const student = {
//     name : "aman",
//     marks : 56,
//     city : "DHANBAD",
//     prop : this,
//     getName : function(){
//         console.log(this);
//         return this.name;
//     },
//     getmarks : ()=>{
//         console.log(this);
//         return this.marks;
//     },
//     getInfo1 : function(){
//         setTimeout(()=>{
//             console.log(this);
//         },2000);
//     },
//     getInfo2 : function(){
//         setInterval(()=>{
//             console.log(this);
//         },2000);
//     },
// };

// Qs.
// const square = n =>(n*n);
// console.log(square(7));

// Qs.
// setInterval(()=>{
//     console.log("Anubhav");
// },2000);

//                         Practice question...

// Q1.

// let arr = [1,2,3,4,5,6];
// let n = arr.length;
// let total =0;
// const arrayAverage = (arr1)=>{
//     for(let num of arr1){
//         total = total + num;
//     }

//     return total/n;
// }

// console.log(arrayAverage(arr));

// Q2.

// let num = 7;
// const isEven = (number)=>{
//     if(number%2==0){
//         console.log("Even");
//     }
//     else{
//         console.log("Odd");
//     }
// }

// isEven(num);

// Q3.
// const obj = {
//     message : "Hello world",
//     logMessage(){
//         console.log(this.message);
//     }
// }

// setTimeout(obj.logMessage,1000);

// Q4.

// let length = 5;
// function callBack(){
//     console.log(this.length);
// }

// const object = {
//     length : 5,
//     method(callBack){
//         callBack();
//     },
// };

// object.method(callBack,1,2);














