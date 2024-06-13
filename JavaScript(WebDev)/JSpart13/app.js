//                          Async....
// async function greet(){
//     // For error
//     throw "Error occured at this stage";
//     return "hello";
// }

// greet()
// .then((result)=>{
//     console.log("Promise was resolved..");
//     console.log("Result was ",result);
// })
// .catch((err)=>{
//     console.log("Promise rejected error = ",err);
// })

// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             if(num<6){
//                 reject(`number less then 6 it's = ${num}`);
//             }
//             console.log(num);
//             resolve();
         
//         },1000)
//     })
// }
//     async function demo(){
//      try{
//         await getNum();
//         await getNum();
//         await getNum();
//         getNum();
//      }
//      catch(er){
//         console.log("Error caugth");
//         console.log(er);
//      }
//      console.log("Hello")
//     }
// demo();

//                 APIs....
//  Demo apis
// https://catfact.ninja/fact
// https://www.boredapi.com/api/activity
// https://dog.ceo/api/breeds/image/random

// let jsonRes = '{"fact": "A domestic cat can run at speeds of 30 mph.","length": 43}';
// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// First fetch request.......

// let url = 'https://www.boredapi.com/api/activity';
// // fetch returns Promise
// fetch(url)
// .then((res)=>{
//     console.log(res);
// })
// .catch((error)=>{
//     console.log("respose not available")
//     console.log(error)
// })

//  fetching data.....

// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     return data.length;
// })
// .then((len)=>{
//     console.log(len)
// })
// .catch((er)=>{
//     console.log(er);
// })

//              Fetch with async and await......

// let url = "https://catfact.ninja/fact";

// async function getFact(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
    
//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     }catch(er){
//         console.log("Error - ",er);
//     }
//     console.log("Hello!! cats...");
// }
// getFact();


