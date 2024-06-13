// let btn = document.querySelector('button');
// btn.addEventListener("click",async ()=>{
//     let image = await getImage();
//     let img = document.querySelector("#Dimg");
//     img.setAttribute("src",image);
// });
// let url = "https://dog.ceo/api/breeds/image/random";
// async function getImage(){
//     try{
//         let res = await axios.get(url);
//         return res.data.message
//     }catch(e){
//         return "/"
//     }
// }

// let btn = document.querySelector('button');
// btn.addEventListener("click",async ()=>{
//     let fact = await getFact();
//     let para = document.querySelector('#result');
//     para.innerText = fact
// });
// let url = "https://catfact.ninja/fact";
// async function getFact(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact
//     }catch(e){
//         return "No facts available"
//     }
// }

//   Sending headers with  API request
// const url = "https://icanhazdadjokes.com";
// async function getJokes(){
//     try{
//         const config = {headers:{Accept:"application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data);
//     }catch(e){
//         console.log(e);
//         console.log("can't fulfill request")
//     }
// }
// getJokes();

// Getting College name activity

let input =document.querySelector('input');
let btn = document.querySelector("button")

btn.addEventListener("click",async ()=>{
    let country = input.value
    console.log(country);
    let collArr = await getUni(country)
    show(collArr);
})
function show(colArr){
    let list = document.querySelector("#UniList");
    list.innerText = ""
    for(col of colArr){
        console.log(col);
        let u = document.createElement('li');
        u.innerText = col.name;
        list.appendChild(u)
    }
}
let url = "http://universities.hipolabs.com/search?name="
async function getUni(country){
    try{
        let res = await axios.get(url+country)
        return res.data
    }catch(e){
        console.log(e);
    }
}









