//       loops in Js..
// For loop
// for(let i=0;i<5;i++){
//     console.log(i);
// }

// odd numbers
// for(let i=1;i<=20;i=i+2){
//     console.log(i);
// }

// Even numbers
// for(let i=0;i<=20;i=i+2){
//     console.log(i);
// }

// Infinite loop
// for(let i=0; ;i++){
//     console.log(i);
// }

// Qs. multiplication of 4 
    // for(let i=4;i<=40;i=i+4){
    //     console.log(i);
    // }

// Qs. take input from the user  for its table
// let num = prompt("Enter a number : ");
// num = parseInt(num);

// for(let i=1;i<=10;i++){
//     console.log(`${i}X${num}=${i*num}`);
// }

//          Nested for loop
// for(let i=0;i<=3;i++){
//     console.log(`loop number ${i+1}`);
//     for(let j=0;j<=3;j++){
//         console.log(j);
//     }
// }

//                     while loop
// let i=0;
// while(i<=5){
//     console.log(i);
//     i++;
// }

//    Guess my fav movie..
// let movie = "Lapata ladies";

// let guess = prompt("Guess my favorite movie...");
// while(guess != movie){
//     if(guess == "quit"){
//         console.log("You quit");
//         break;
//     }
//      guess = prompt("umm hm wrong guess Try again.");
// }

// if(guess==movie){
//     console.log(`Congrats you guessed it right its "${movie}"`);
// }

//        Loops with array..
// let f = ["abckab","hadbchv","khgca","badkhcba"];
// for(let i=0;i<f.length;i++){
//     console.log(i,f[i]);
// }

//      Nested array loop.
// let arr = [["ccsgj","hvjh","khhcv"],["njcb","knljxb","jbaaskb"]];
// for(let i=0;i<arr.length;i++){
//     console.log(`List #${i}`);
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
// }

// Qs.print st name and marks...
// let student = [[95,"Anubhav"],[67,"Raj"],[88,"Yaay"]];
// for(let i=0;i<student.length;i++){
//     console.log(`student #${i+1}`);
//     for(let j=0;j<student[i].length;j++){
//         console.log(student[i][j]);
//     }
// }

//     For of loop (like for each loop)

// let arr = ["anubh","vdjhv","bsbkbk","dbkhb"];
// for(array of arr){
//     console.log(array);
// }

// for(char of "AnubhavSingh"){
//     console.log(char);
// }

//     Nested for of loop
// let arr = [["nljdnc","nlxcn","jdc"],["nasn","asnc","nassl"]];
// for(list of arr){
//     for(lists of list){
//         console.log(lists);
//     }
// }

//                              Todo app .............
// List: to show all todos
// add: to add a todo
// delete: to delete a task
// quit: to exit todo

// let todo =[];
// let input = prompt("Enter what you want to do list/add/quit/delete: ");
// while(true){
//      if(input == "quit"){
//         console.log("You quit the app...")
//         console.log("Heres the saved list");
//         console.log("-----------------------");
//         for(let i=0;i<todo.length;i++){
//             console.log(i,todo[i]);
//         }
//         console.log("-----------------------");
//         break;
//     }
//     else if(input == "list"){
//         console.log("-----------------------");
//         for(let i=0;i<todo.length;i++){
//             console.log(i,todo[i]);
//         }
//         console.log("-----------------------");
//     }
//     else if (input == "add"){
//         to = prompt("Enter what you want to add : ");
//         todo.push(to);
//         console.log(`${to} is added to Todo`);
//     }
//     else if(input == "delete"){
//         idx = prompt("Enter the index which you want to delete : ");
//         idx = parseInt(idx);
//         if(idx>=0 && idx<todo.length)
//         todo.splice(idx,1);
//     console.log(`Element at ${idx} is deleted.`);
//     }
//     else{
//         console.log("Wrong input!!!");
//     }
//     input = prompt("Enter what you want to do : ");
// }

//                          Practice question.....

// Q1.
// let arr = [1,2,3,4,5,6,2,3]; 
// let num = 2;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }

// }
// console.log(arr);

// Q2.
// let num = 122345335;
// let copy = num;
// let count =0;
// while(copy>0){
//     count++;
//     copy = Math.floor(copy/10);
//     console.log(copy);
// }
// console.log(count);

// Q3. Find sum of digits
// let num =  123456;

// let copy = num;
// let sum =0;

// while(copy>0){
//     let digit = copy%10;
//     sum = sum +digit;
//     copy = Math.floor(copy/10);
// }

// console.log(sum);


// Q4.
// let num = prompt("Enter number for its factorial : ");
// num = parseInt(num);
// let fact = 1;

// for(let i=1;i<=num;i++){
//     fact = fact *i;
// }

// console.log(fact);


// Q5.
// let arr = [1,2,4,5,77,89,67];
// let largest = 0;
// for(let i=0;i<arr.length;i++){
//     if(largest<arr[i]){
//         largest = arr[i];
//     }
// }
// console.log(largest);



















