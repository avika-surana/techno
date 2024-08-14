// // threaded, synchronous(line by line seq mein output),dynamic type,scripting lang(inpreted-run time)

// console.log("hello techno"); //to print the value

// // alert("hello gs")  //terminal pr error node ki fun nhi h html mein hoga

// //var let const (diff is imp) 3keywords to define variables(imp)
// //variable declared by var can be reassigned or redeclared
// // var num1=20;
// // var num1=30; in this it will give no error and accepts the same name of var reassign
// // let num2=30;
// // num2=40; //variable declard with let can be reassigned but cant be redeclared
// // const num1=10;
// // const=50 //variable declared with const cannot be reassigned or redeclared  

// var firstnum = 20; //variable
// console.log(firstnum)

// // 2 datatypes primitive type-string,number,boolean,undefined,symbol,bigint
// // reference or object type datatype-array,objects,date,null
// var firstnam = undefined
// var firstvar = "hey its gs" //"" '' valid strings
// console.log(firstvar)
// console.log(typeof firstvar) //iska type pta krne ke liye var ka
// console.log(typeof firstnam)

// //arrays collection of multiple datatypes
// var firstvar1 = [20, 30, "hello", undefined]
// console.log(firstvar1)
// console.log(typeof firstvar) //null,array refernce types give object as typeof

// var date = new Date();
// console.log(date);
// console.log(typeof date) //for date

// var firstvar2={
//     firstname : "avika",
//     lastnme :"surana"
// };  //object
// console.log(firstvar2)
// console.log(typeof firstvar2)

// //array of objects [{} {} {}] json

// //dynamic typing
// // var firstvar3="ullu";
// // firstvar3=[20,30]
// // firstvar3={
// //     firstn:"gun",
// //     lastn:"bun"
// // };
// // firstvar3=true
// // console.log(firstvar3) 

// //operators
// //arithmatic operators(+,-,*,/)
// let a=14;
// let b=20;
// let add= a+b;
// let sub=a-b;
// console.log(add)
// console.log(sub);
// console.log(multi);
// console.log(div);
// let firstname="avika";
// let lastname="surana";
// console.log(firstname+" " +lastname);
// console.log(a**b); //a power b
// console.log(a%b);
// console.log(5+"5");
// console.log(5-"5");
// console.log(5*"5");
// console.log(5/"5");

// //addition assignments
// let x=5;
// //x=x+10;
// x+=10;
// console.log(x);
// let str ="10";
// let constr=+str;
// console.log(+str)
// console.log(typeof constr)
// //console.log("avika",-10);
// let str1="5";
// let str2=+str1;
// console.log(5+"5");
// let y=10;
// console.log(y);
// //comaparision operator
// let num4=10;
// let num5=20;
// console.log(num !=num5);
// //logical operator
// //and(&&) or (||)
// let isLoggedin =true;
// let isAdmin =true;
// console.log("Isthe user logged in and an admin"? isLoggedin && isAdmin);

//conditional statements
//if else ,switch,ternary operators

//functions
//Array ,object 
//loops..

// let count =20;
// if(count=20)
//     {
//         console.log("the count is 20");}
//         else  (count>20){
//             console.log("the count is not 20");
//         }
        
// if(count=20)
// {
//     console.log("the count is 20");}
//     else  if(count>20){
//         console.log("the count is greater than 20");
//     }
//     else{
//         console.log("the count is less than 20");
// //     }
// let firstnumber =prompt ("enter the first number");
// console.log("firstnumber");

//promot the user to enter their username and password
//if username is"admin" and password is 123 in numbers
//if both condition is true ten display "Auth Successful" else "Auth Failed"
// let username=prompt("enter username");
// let password=prompt("enter the password");
// if(username==="admin" && password ===123)
// {
//     console.log("Auth Successful");
// }    else{
//     console.log("Auth Failed")
// }

//ternary operator 
//let count =20;
//count ===20 ? console.log("the count is 20") : count>20?console .log("the count is greater than 20"):
// console.log("the count is less than 20");
// let username =prompt("enter the username");
// let password =prompt("enter the password");

// (username ==="admin"&& password ==="123")?console.log("Auth Successful"):console
// .log("Auth Failed");
//switch cases 
// let daynumber =3;
// let dayname;
// switch(daynumber){
//     case 1:
//         dayname ="Monday";
//         break;
//         case 2:
//             dayname="Tuesday";
//             break;
//             case 3:
//                 dayname="wednesday";
//                 break;
//                 case 4:
//                     dayname="thursday";
//                     break;
//                     case 5:
//                         dayname="friday";
//                         break;
//                         case 6:
//                             dayname="saturday";
//                             break;
//                             case 7:
//                                 dayname="sunday";
//                                 break;
//                                 default:
//                                     daynumber="invaild daynumber";

// }
// console.log(dayname);
//functions 
//function decleration
// function sum(){
// console.log("this is sum function");
// }
// //function expression
// let sum=function(){
//     console.log("this is function expression");

// }

//arrow functions
// let sum =()=>{
//     console.log("this is arrow functions");
// }
// sum();
// let add =(a,b)=>{        //let add =(a,b)=>a+b; likh skte hai
//     return a+b;
// }
// let result =add(2,5);
// console.log(result);

//2nd Difference between  var let const


//global scope and  local scope or funcional scope 
//Es6 version=block scope scope(variable kis area me accessible hai)
//{} functional scope

// var -->global scope variable but in case of function it becomes local scope
// let and const--> block scope variable 
 //function ko chhod ke saree parenthises block scope ko denote karenge...


// var a=20;  //same let ke sath bhi bana skte hai
// console.log(a);


// function func(){
//     //this area define the local and global scope
// }
// if(true)
// {

// }else{

// }
// {
//     var a=20;
// }
// console.log(a);

// {
//     let a=20; //error
// }
// console.log(a);
// {
//     var a ="avika";
// }
// console.log(a);

// function sum(){
//     var a =20;
//     return a;                 //here  it will show a is not defined...
// }
// console.log(a);

//Array and objects
//        //0   1  2  3  4
// let arr=[10,20,30,40,50];
// console.log(arr[ arr . length - 1]);
// let nestedArr=[10,20,30,[1,2,3,4],[20,30,40,["aaa" , "aab",[true ,false]]]]
// let newArr1=nestedArr[nestedArr.length-1];
// let newArr2=nestedArr[nestedArr1.length-1];
// let newArr3=nestedArr[nestedArr2.length-1];
// console.log(newArr3[0]);
//let newArr=nestedArr[nestedArr.length-][nestedArr[nestedArr.length-1].length-1]
//[nested[nestedArr.length-1][nestedArr[nestedArr.lenth-1].length-1].length-1][0];
//console.log(newArr)



// console.log(arr,length)
//arr[arr,length]="avika";
// console.log(arr);

//objects
let obj={
    "firstname" :"avika",
    "lastname":"surana"
}
//obj.lastname="mittal";
obj.section="FSD";
//console.log(obj);
let firstname="section";
let KeyName="address";
obj[KeyName]="udaipur";
console.log(firstname);

