// DOM events
// let btn = document.querySelector('button');
// console.dir(btn);
// btn.onclick = function(){
//     alert("Hi, How are you!!");
// };

// let btn = document.querySelectorAll('button');
// for(btns of btn){
//     btns.onclick = sayHello;

//     function sayHello(){
//         alert("Heheheh!!!!");
//     }
// }

// let btn = document.querySelectorAll('button');
// for(btns of btn){
//     btns.onclick = sayHello;
//     btns.onmouseenter = function(){
//         console.log("HEehhehe");
//     };
//     console.dir(btn);
// }

// function sayHello(){
//     alert("Hello!!");
// }

//                       addEventListener.....
// element.addEventListener(event,callback)

// let btn = document.querySelector('button');
// btn.addEventListener("click",function(){
//     console.log("button clicked");

//     console.dir(btn);
// });

//                      Activity....

// let div = document.querySelector('div');
// let head = document.querySelector('h1');
// let btn = document.querySelector('button');

// btn.addEventListener("click",function(){
//     let randomColor = getRandom();
//     head.innerText = randomColor;
//     div.style.backgroundColor = randomColor;
// });

// function getRandom(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

// let btn = document.querySelector('button');
// btn.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// let h1 = document.querySelector('h1');
// h1.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// let h2 = document.querySelector('h2');
// h2.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// let p = document.querySelector('p');
// p.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// let h3 = document.querySelector('h3');
// h3.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

//                  Keyboard events...
// let input = document.querySelector('input');
// input.addEventListener("keyup",function(event){
//         console.log(event);
//         console.log(event.code);
//         console.log(event.key);
//         console.log("Key was pressesd");
// })

// let inp = document.querySelector('input');
// inp.addEventListener("keydown",function(event){
//     let out = event.code;

//     if(out == "ArrowUp"){
//         console.log("Character moved Up");
//     }
//     else if(out == "ArrowDown"){
//         console.log("Character moved Down");
//     }
//     else if(out == "ArrowLeft"){
//         console.log("Character moved left");
//     }
//     else if(out == "ArrowRight"){
//         console.log("Character moved Right");
//     }
// });

//                     Form 

// let form = document.querySelector('form');
// let input = document.querySelector('input');
// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     alert("Hey! you have submitted it...")
//     console.log(`${input.value}`);
// });

//          Extracting forms data....

// let form = document.querySelector('form');
// let input = document.querySelector('input');

// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     console.dir(input);
//     console.log(input.value);
// });


// let form = document.querySelector('form');
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.dir(form);
//     let name = document.querySelector('#name');
//     let pass = document.querySelector('#pass');
    
//     console.log(pass.value);
//     console.log(name.value);

//     alert(`Hi!! ${name.value} your password is set as ${pass.value}`);
// });

//         Change event....

// let form = document.querySelector('form');
// form.addEventListener("submit",function(e){
//     e.preventDefault();
// });

// let user = document.querySelector('#name');
// user.addEventListener("change",function(){
//     console.log("input changed");
//     console.log("Final value = ",this.value);
// });

// let user = document.querySelector('#name');
// user.addEventListener("input",function(){
//     console.log("input");
//     console.log("Final value = ",this.value);
// })

// let text = document.querySelector('input');
// let p = document.querySelector('p');
// text.addEventListener("input",function(){
//     p.innerText = this.value;
//     console.log(this.value);
// })

//                      Practice questions....
// Qs1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load
// [Use MDN for help

// let bt = document.querySelector('button');
// bt.addEventListener("mouseout",function(){
//     console.log("Mouse is out....");
// })

// let input = document.querySelector('input');
// input.addEventListener("keypress",function(){
//     console.log("keyPressed.")
// })

// let para = document.querySelector('p');
// para.addEventListener("scroll",function(){
//     console.log("Body was scrolled...");
// })

//            pending   up

// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.

// let btn = document.querySelector('button');
// btn.addEventListener("click",function(){
//     btn.classList.add("btn");
// });


// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading

// let inp = document.querySelector('input');
// let h2 = document.querySelector('h2');

// inp.addEventListener("input",()=>{
//     // if(inp.value>='a' && inp.value<='z' || inp.value>='A' && inp.value<='Z')
//         let f = inp.value.replace(/[^a-zA-Z\s]/g, '');
//         h2.innerText = f;
// });