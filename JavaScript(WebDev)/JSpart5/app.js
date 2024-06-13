//                               Objects literals
// let student = {
//     name : "Anubhav",
//     age : 23,
//     marks : 94.3
// };

// Q. thread/Twitter post...
// let post = {
//     posts : "Abkjebhkwbkhch",
//     content : "Good contents..",
//     likes : 150,
//     reposts : 5,
//     tags : 9
// };
// console.log(post.content);
// console.log(post["content"]);

//      Add/Update/delete values
// const student = {
//     name : "Anubhav",
//     age : 19,
//     marks : 94.4,
//     city : "Delhi"
// };
// student.city = "Dhanbad";
// student.gender = "Male";
// delete student.marks;

//      object of object
// const classInfo = {
//     aman : {
//         grade : "A+",
//         city : "Dhanbad"
//     },
//     Anubhav : {
//         grade : "A+",
//         city : "Ranchi"
//     },
//     Shradha : {
//         grade : "A",
//         city : "Pune"
//     }
// };
// console.log(classInfo.Anubhav);
// console.log(classInfo);
// console.log(classInfo.Anubhav.city);

//  Array of object...
// const classInfo=[
//     {
//         name : "Aayush",
//         age : 8,
//         city : "Delhi"
//     },
//     {
//         name : "Anubhav",
//         age : 11,
//         city : "Dhanbad"
//     },
//     {
//         name : "karan",
//         age : 23,
//         city : "kerala"
//     }
// ];
// console.log(classInfo[0]);
// console.log(classInfo);
// console.log(classInfo[1].age);

//                         Math objects
// console.log(Math.PI);
// console.log(Math.E);

//+ve value 
// console.log(Math.abs(-78.89));

// console.log(Math.pow(2,4));
// console.log(Math.floor(54.9999));
// console.log(Math.ceil(54.9999));
// console.log(Math.random());

//  Random value between 1 to 10
// let num = Math.floor(Math.random()*10)+1;
// console.log(num);

// Qs.(Random number value between 1 to 100)
// let num = Math.floor(Math.random()*100)+1;
// console.log(num);

// Qs.(Random number value between 1 to 5)
// let num = Math.floor(Math.random()*5)+1;
// console.log(num);

//                           Number guessing game......
// let number = prompt("Enter the maximum number between which you wanna to guess : ");
// number = parseInt(number);

// let rand = Math.floor(Math.random()*number)+1;
// let guess = prompt(`Guess the number between 1 to ${number} or enter quit`);

// while(true){
//     if(guess == "quit"){
//         console.log(`You quit!! number was ${rand}`);
//         break;
//     }
//     if(guess == rand){
//         console.log(`Congrats!! you guessed it right it was ${rand}`);
//         break;
//     }
//     else if(guess < rand){
//         guess =  prompt("Guess higher!!");
//     }
//     else {
//         guess =  prompt("Guess lower!!");
//     }
// }

//            Practice questions.................

// Q1.
// let dice = Math.floor(Math.random()*6)+1;
// console.log(dice);

// Q2.
// let car = {
//     name : "Toyota",
//     model : "XL121",
//     color : "Red"
// };
// console.log(car);

// Q3.
// let Person = {
//     name : "Anubhav",
//     age : 19,
//     city : "Dhanbad"
// };
// Person.city = "New York";
// Person.country="United states";
// console.log(Person);
















