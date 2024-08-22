// let arr=[10,20,30,40,50];
// let filtered=arr.filter((item)=>item!=30);
//console.log(fileredarr);
//reduce
// let sum=arr.reduce((acc,curr)=>{
    // return acc+curr;
// },1000);
//  acc   curr
//0  10   10
//10  20   30
//30   30   60
//60   40    100
//100  50    150
// console.log(sum);

// let arr=[10,20,30,40,50];
// let foundItem=arr.filter(item=>item>20);
// console.log(foundItem);


// let arr=[10,20,30,40,50];
// let foundElementIndex=arr.findIndex(item=>item>20);
// console.log(foundElementIndex);
 
// let arr=[11,21,31,40,51]  //Ek bhi ho even to true aayega
// let hasEven=arr.some((item)=>item%2==0);
// console.log(hasEven);

// let arr=[11,21,31,40,51]  
// let even=arr.every((item)=>item%2==0);
// console.log(even);

//object
// let obj={
//     firstNme :"avika",
//     lastName :"surana"
// }
//let keys=objects.keys(obj);
//console.log(keys);

// let values=objects.values(obj);
// console.log(values);

// let entries =Object.entries(obj);
// console.log(entries)


// let obj ={
//     firstName:"avika",
//     lastName:"surana"
// }


// Object.freeze(obj);
//obj.firstName="avika";
// obj.address="udaipur";
// console.log(obj);


//const object1={
// firstName:"avika"
// lastName:"surana"
//}

// object1.firstName="avika";
//console.log(object1);

// let obj ={
//     fistName:"avika",
//     lastName:"suurana"
// }
// Object.seal(obj);
// obj.firstName="avika";
// obj.lastName="udaipur";
// console.log(obj);
// console.log(obj.hasownProperty("gender"));

//string methods
// let str="Hello World";
// let char =str.charAt(6);
// console.log(char);

// let str ="Hello world";
// let newStr=str.concat("Techno");
// console.log(newStr);

// let hasWorld = str.includes("world");
// console.log(hasworld);

// let str="Hello world";
// let index =str.indexOf("or");
// let index1 =str.lastIndexof("o");
// console.log(index1);

// let str="hello world";
//   let sliceStr=str.slice(3,8)
// console.log(sliceStr);

// let subStr=str.substring(4,8);
// console.log(subStr);

// let str ="hello world";
//let newStr=str.toUpperCase();
//console.log(newStr);

// let str="    hello       world";
// console.log(str.length);
// let trimm=str.trim();
// console.log(trimm);


//spliting

// let str="heloo world hjhj hhjhj hjhj hjhjh";
// let splittedStr =str.split("");
// console.log("splittedStr");

// let str="Hello world";
// let newStr=str.replace("world" ,"techno");
// console.log(newStr);

// let newStrr=str.repeat(2);
// console.log(newStrr);


// MATH Object    numbers are in between 0 to 1 nor exactly 0 neither exactly 1.....
// let num=Math.random();
// console.log(num)

// let num=10.234;
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.pow(2,3));
// console.log(Math.sqrt(16));


    // Generate a random number between 0 and 9999
    let otp = Math.floor( 1000 + Math.random() *9000);  //1000--9000
    console.log("opt is",Math.floor(otp));


 
 
 


