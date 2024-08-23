 //loops, strict node ,console types ,array methods
 //for,while,do while
//  let count =11;
//  while(count<=10){
//     console.log(count<=10);
//         console.log(count);
//         count++;
//     };
//     do{
//         console.log(count);
//         count++;

//     }
//     while(count<=5)
//   for(let  i=0;i<10;i++){
// console.log(i);
// }
// let arr =[10,20,30,40,50,60,70,80,90];
// for(let i =0; i<arr.length;i++){
//     console.log(arr[i]);}
//     //for of and for in loop
//     let items=["first","second",3,4,"fifth"];
//     for(let a of items ){
//         console.log(a);
//     }
//     for(let index in items ){
//         console.log(index)
//         console.log(items[index]);
//     }
    
    //let a=20;
    //b=20
    //console.log(b);

    //function sum(a,a){
    //"use strict"
    // console.log("sum function")
    // }

    //console types
    // console.log("log statement");
    // console.error("This is an error console");
    //console.warn("this is warning console");
    
    // console.assert(5>10,"5 is not greater than 10");
    // console.assert(5<10,"10 is  greater than 5");

//     let person ={
//         name:"avika",
//         age:"**",
//         address:{
//             city:"udaipur",
//             Zipcode:"313002",
//  },
//  hobbies :["nothing"]    }

//  console.dir(person);
//  let data=[
// {name:"A",address:"udaipur",dept:"05"},
// {name:"A",address:"udaipur",dept:"05"},
// {name:"A",address:"udaipur",dept:"05"},
// {name:"A",address:"udaipur",dept:"05"},


//  ] 
//  console.table(data)
//  console.group("group");
//  console.log("message1");
//  console.log("message2");
// console.groupEnd();
 
// console.count("counter");
// console.count("counter");
// console.count("counter");

// let arr=[10,20,30,40,50];
//let result=arr.push(1000);//1000 ko indexing provide karke puh karega
//console.log(result);
//console.log(arr);
//console.log(arr.pop());
//console.log(arr);

//console.log(arr.shift());
//console.log(arr);

// let arr1=[10,20];
// let arr2=[30,40];
// let result =arr1.concat(arr2)
// //add krdeta hai dusre array ke aagey
// console.log(result);

//slice,splice
// let arr =[10,20,30,0,50,60];
// let sliceArr=arr.slice(2,5);
// console.log[arr];
// console.log(sliceArr);
// let arr=[10,20,30,40,50,60];
// arr.splice(2) //2 and 5 are index numbers here
// console.log(arr);
// arr.splice(2,0,"avika","Surana");
//     console.log(arr)

    //includes
    // let result=arr.includes(90);//agr ye value array me hai to true warna false
    // console.log(result);

    //reverse
  // arr.reverse()//reverse an array
   // console.log(arr);

    //join
    //let result=arr.join(); //elements ke beech me kuch bhi likhana 
    //ho to jon use karte hai
    //console.log(result)

    // let arr1=[10,20,[30[40]]];
    // let result=arr1.flat(2);
    //console.log(result);

    //map,filter,reduce
    let arr=[10,20,30,40,50,60];
    let newArr=arr.map((item)=>{
        if (item>30)
        return item>100;
    })
    console.log(newArr);
    console.log(arr);
    //map returna new arr with the same length as original

//forEach...difference b/w forEach and map
arr.forEach((item)=>{
    return item;

})//same as map it also take callback function but the diff. is....
//aap kucheturn karwao ya nahi forEach humesha
// undefined ega vo console krkke print kardega par return nahi...
console.log(result)




 