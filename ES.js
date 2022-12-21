// ES5
// console.log("hi"+"good morning");
// let firstname = "pallavi";
// let lastname = "sahu";
// console.log("my name is "+ firstname+"."+ "nad lastname is "+lastname+".")


///ES6
// console.log(`"hi.Good morning`);
// console.log(`my name is ${firstname}. and lastname is ${lastname}`);
//  let a =50;
//  let b=30;
//  console.log(`sum is ${a+b},
//  not ${2*a+b}`);

// ES6 methods
/* startsWith, endsWith, includes, repeat*/
// const fname = `${firstname}`;
// const fullname = `${firstname }${lastname }`;
// console.log(`${firstname}`.startsWith('p'));
// console.log(fname.endsWith('i'));
// console.log(fname.endsWith('avi'));
// console.log(fullname .repeat(3));

// Array destruction
// let langlist = ['js', 'php', 'c', 'java', 'python'];

// let [lang1, lang2, lang3, lang4, lang5] = langlist;

// console.log(`my fav language is ${lang1}`);
// console.log(langlist.length)

// let [ l1,,,,llast] = langlist;
// console.log(`my fav language is ${llast}`);


// swap two numbers without using third variable
// let a = 8;
// let b = 10;
// [a, b] = [b, a];

//object destruction
// const data = {
//     name : 'pallavi',
//     age : 20,
//     degree : 'cse'
// }

// let {name, age, degree} = data;

// console.log(name);
// console.log(age);


// const sum = (a,b) =>{ return a+b}
// console.log(sum(1,2,3,4)); //3


// const sum1 = (...inputs)=>{
//     console.log(inputs);
//     let sum = 0;
//     for(let i of inputs){
//         sum = sum+i;
//     }
//     console.log(sum);
// }
// sum1(1,2,3,4,5,6);

// spread operator
// const sum = (a,b,c) =>{ 
// console.log(a+b+c);
// } 
// let arr = [1,2,3];
//replace apply
// sum.apply(null, arr);
// sum(...arr);

// replace concat
// let arr1 = [9,8,7];
// let arr2 = [1,2,3];

// arr1 = arr1.concat(arr2);
// console.log(arr1);

// arr1 = [...arr1,...arr2];
// console.log(arr1)

// maths object in ES6
// let number = 5.9;
// console.log(Math.sign(number));
// console.log(Math.trunc(number));







