//                      Call stack...
// function hello(){
//     console.log("I am inside hello function...");
//     console.log("Hello");
// }
// function demo(){
//     console.log("Calling hello function...");
//     hello();
// }

// console.log("I wil be executed first");
// demo();
// console.log("I will be executed last..");

//                  Visualizing the call stcak

// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();
// }
// function three(){
//     let ans = two()+one();
//     console.log(ans);
// }
// three()


//                         Callback hells.....
// h1 = document.querySelector('h1');
// function changeColor(color,delay,nextChangeColor){
//     setTimeout(()=>{
//         h1.style.color = color;
//         // if nextcolor is false then execute nothing..
//         if(nextChangeColor) nextChangeColor();
//     },delay)
// }
//  changeColor("red",1000);
//  changeColor("orange",2000);
//  changeColor("blue",3000);

//                             This is callBack hell...
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("green",1000,()=>{
//             })
//         })
//     })
// })

//                Promises (to understand promises we'll take example of callback hell)

// function saveToDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }
//     else{
//         failure();
//     }
// }
// saveToDb("Anubhav",()=>{
//     console.log("Success 1 : Data saved");
//     saveToDb("Singh",()=>{
//         console.log("Success2 : Data saved");
//         saveToDb("Rajput",()=>{
//             console.log("Success3 : Data saved");
//         },()=>{
//             console.log("Failure3 : weak connection");
//         })
//     },()=>{
//         console.log("Failure2 : weak network..");
//     })
// },()=>{
//     console.log("Failure3 : weak connection...")
// })

//       Promises (resolve and reject)

// function saveToDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("Success : Data saved");
//         }
//         else{
//             reject("Failure : Data not saved due to weak connection..");
//         }
//     })
// }
// console.log(saveToDb("ANubhav"))

// Then and catch 
// saveToDb("Anubhav")
//     .then((result)=>{
//         console.log("Data was saved");
//         console.log(result)
//     })
//     .catch((error)=>{
//         console.log("Data was not saved");
//         console.log(error);
//     })

//                 Promise chaining...
// saveToDb("Anubhav")
//     .then((result)=>{
//         console.log("Data was saved");
//         console.log(result)
//         return saveToDb("Singh");
//     })
//     .then(()=>{
//         console.log("Data2 saved");
//         return saveToDb("Rajput");
//     })
//     .then(()=>{
//         console.log("Data3 saved");
//     })
//     .catch((error)=>{
//         console.log("Data was not saved");
//         console.log(error);
//     })

//           Taking previous example resolving callBack hell.....

h1 = document.querySelector('h1');
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve (h1.style.color = color)
        },delay)
    })
}

// changeColor("red",1000)
//     .then(()=>{
//         console.log("Color changed");
//         return changeColor("Blue",1000);
//     })
//     .then(()=>{
//         console.log("Color changed");
//         return changeColor("green",1000);
//     })
//     .then(()=>{
//         console.log("Color changed");
//         return changeColor("yellow",1000);
//     })
//     .then(()=>{
//         console.log("Color changed");
//         return changeColor("pink",1000);
//     })

    // To print pending state
//   let reqPromise = changeColor("red",5000)
//   console.log(reqPromise)









