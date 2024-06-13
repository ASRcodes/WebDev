//               String methods
// let msg = "     Hello   ";
// console.log(msg.trim());
// console.log(msg.toUpperCase())
// console.log(msg.toLowerCase());

// method chainig
// console.log(msg.trim().toLowerCase());

// String arguments
// let str = "ILoveCoding";
// console.log(str.indexOf("Love"));

//                slice

// let str = "ILoveCoding";
// console.log(str.slice(0,5));
// console.log(str.slice(5));
// console.log(str.slice(-4));

//         find and replace & repeat

// let str = "ILoveCoding";
// let a =str.replace("Love","do");
// console.log(a);
// console.log(str.repeat(4));

// Qs.
// let msg = "help!";
// console.log(msg.toUpperCase());

// Qs.
// let nam = "apnaCollege";
// console.log(nam.slice(4).replace('l','t').replace('l','t'));

//                    Arrays...

// let arr = ["Anubhav","Raj","Aashi"];
// console.log(arr[0][0]);
// console.log(arr[0]);

// arr[10]="Tanvi";
// console.log(arr);

// Array methods...

// let arr = ["aa","adf","iop","jdbdjb"];
// Add and delete from last
// arr.push("Raj");
// arr.pop();
// Add and delete from end
// arr.unshift("Yo");
// arr.shift();
// console.log(arr);

// Qs..
// let start = ["jan","july","march","aug"];
// start.shift();
// start.shift();
// start.unshift("july","june");
// console.log(start)

// let arr = ["aa","ansbsjkb","sjbksb","mm;knls"];
// console.log(arr.indexOf("aa"));
// console.log(arr.includes("aa"));
// console.log(arr.reverse());
// let arr2 = ["Anu","Shubh","Yaay"];
// console.log(arr.concat(arr2));
// console.log(arr.slice(1));

//                        Splice(remove/replace/add elements in place)

// let colors = ["red","yellow","blue","orange","pink","white"];
// console.log(colors.splice(4));
// // It doesn't print the copy of array it changes the color array..
// console.log(colors); 
// console.log(colors.splice(0,1));
// console.log(colors.splice(0,1,"Black","Magenta"));

// let cars = ["Toyota","mercedes","TATA","BMW"];
// // Adding an element in between
// cars.splice(1,0,"Porsche");
// // Replacing an element
// cars.splice(1,1,"Bugati");


//                        Sorting....
// It sorts the element in ascending order ,It first converts the element into string and then performs sorting

// let chars = ['a','b','g','a','c'];
// console.log(chars.sort());
// // It will convert these numbers into string and then sort them...
// let num = [1,4,6,100,35,67,2];
// console.log(num.sort());

//Qs.
// let start = ["jan","july","march","august"];
// start.splice(0,2,"july","june");

// Qs.
// let lang = ["C++","C","C#","Java","Javascript","python","sql"];
// lang.reverse();
// console.log(lang.indexOf("Javascript"));

//               Array reference...
// As [1]==[1] its false
// let arr1 = [1];
// let arr2 = [1];

// let arr = ['a','b'];
// let arrCopy = arr;
// //  here arr == arrCopy..

//  Costant array
// here we perform all push,pop,etc oper... but we can't assign arr a new value
// const arr = [1,3,5666,57,876,"djhsvcjhascv","adbkhad"];
// // can't be done
// arr = [880,822,67];

//          Nested Arrays(MultiDimensional arrays)...
// let nums = [[1,2],[1,9],[0,9]];
// console.log(nums[0]);

// // Qs.
// let ttt = [['X','O','O'],['O','X','O'],['O','O','X']];
// console.log(ttt);


// Practice questions..........
// 1.
// let arr = [1,2,3,44,56,67];
// let arr1=arr.slice(0,3);
// console.log(arr1);

// 2.
// let arr = [1,2,3,44,56,67];
// let arr2 = arr.slice(3,arr.length);
// console.log(arr2);

// 3.
// let str = prompt("Please enter a string");
// if(str.length==0){
//     console.log("String is empty");
// }
// else{
//     console.log("String is not empty");
// }

// 4.
// let str = "AnuBhav";
// let idx = 3;
// if(str[idx]==str[idx].toLocaleLowerCase()){
//     console.log(`${str[idx]} is loweCase`);
// }
// else{
//     console.log(`${str[idx]} is upperCase`);   
// }

// 5.
// let str = prompt("Enter a string");
// console.log(`Original string = ${str}`);
// console.log(`String with no spaces = ${str.trim()}`);

// 6.
// let arr = ["Anu",1,67,90,"Raj"];
// let toFind = 687;

// if(arr.indexOf(toFind) != -1){
//     console.log(`${toFind} is present in array [${arr}]`);
// }
// else{
//     console.log(`${toFind} is not present in array [${arr}]`);
// }







