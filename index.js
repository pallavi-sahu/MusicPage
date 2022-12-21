// javascript API
// console.log("hello world");
// console.error("this is error");
// console.warn("this is warning")
// console.assert(6==8);


// variable

// var num1 = 9;
// var num2 = 7;
// console.log(num1+num2);


// Datatypes in javascript
// 1.number, 2.string, 

// 3.object
// var marks = {
//     ravi: 50,
//     shubham: 60,
// }
// console.log(marks)

// boolean
// var a = true;
// var b= false;
// console.log(a*b);

// undefind
// var und;
// console.log(und);

/*
1. premitive datatype: undefined, null, number, string, boolean, symbol
2. reference datatype: Arrays and objects
*/

/*

function avg(a,b){
    return (a+b)/2;
}
c1 = avg(4, 6);
c2 = avg(16, 24);
console.log(c1, c2);
*/

// if statement
// if-else statement
// if-else ladder

// Loops in javascript - while, for, do-while


// let a = 0;
// const b = 1; // always constant

// array  methods
// let array = [2, "pallavi", 4, 7, 'c'];
// array.pop();
// array.push('c');
// console.log(array.shift());

// string methods

// javascript Date
// let mydate = new Date;
// console.log(mydate);

// console.log(mydate.getHours());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes());


// DOM 
// let elm = document.getElementsByClassName("conainer");
// console.log(elm);

// console.log(elm[0].innerHTML);
// console.log(elm[0].innerText);

// tn = document.getElementsByTagName('div');
// console.log(tn);
// createdelement = document.createElement('p');
// createdelement.innerText = "This is a created paragraph";
// tn[0].appendChild(createdelement);
// createdelement2 = document.createElement('b');
// createdelement2.innerText = "This is a created bold para";
// tn[0].replaceChild(createdelement2, createdelement);


// select using query
// sel = document.querySelector('.container');
// console.log(sel);
// sel2 = document.querySelectorAll('.container');
// console.log(sel2);


// Event in javaScript
// function clicked(){
//     console.log("clicked");
// }

// window.onload = function(){
//     console.log('the document was loaded');
// }

// firstcontainer.addEventListener('mousehover', function(){
//     console.log('click on container');
// })
// firstcontainer.addEventListener('mousedown', function(){
//     console.log('mousedown');
// })
// firstcontainer.addEventListener('mouseup', function(){
//     console.log('mouseup');
// })

// firstcontainer.addEventListener('click'6, function(){
//     console.log('click on container');
// })


// arrow function
// function sum(a,b){
//     return a+b;
// }

// sum = (a, b)=> {
//     return a+b;
// }

// settimeout and settimeinterval
// log = ()=>{
//     console.log("i am your log");
// }
// setTimeout(log, 2000);

//use clearInterval/clearTimeout to cancel setTime interval/setTimeout.


// javascript localstorage
localStorage.clear() // clear localstorage
localStorage.removeItem('name', 'pallavi');
localStorage.removeItem('name')

// JSON
obj = {name:"harry", age:5, a:{"this":"that"}};
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
parsed = JSON.parse(`{"name":"harry", "age":5, "a":{"this":"that"}}`);
console.log(parsed);



