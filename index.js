// let firstName = "Haider";
// let lastName = "Bakhtiar";
//  console.log(firstName, lastName);

//  function sum(number1, number2){

//     return number1 + number2;
// }

// console.log(sum(4,8));

// function totalPrice(price, quantity){

//     return price * quantity;

// } 

// let price1 = totalPrice(200 , 3 );
// console.log(price1 + " Usd");

// function timeConvert(minutes){
//     return minutes * 60;
// }

// let time1 = timeConvert(3.4);
// let time2 = timeConvert(8);
// console.log(time1 + " Seconds");
// console.log(time2 + " Seconds");

// function average(a,b,c){
//     return ((a+b+c)/3);
// }

// let average1 = average(5,10,15);
// let average2 = average(9.8,16.9,15);
// console.log(average1);
// console.log(average2);

// function discountedPrice(price, discount){
//      discount = (price * discount) / 100;
//     return price - discount ;
// }

// let discount1 = discountedPrice(1500,20);
// console.log(discount1);

// function fullSentence(name,age,city){
//     console.log("My name is "+ name, ". I am " + age +" Years Old. ", "I am from "+city);
    
// }

// fullSentence("Haider Bakhtiar", 22, "Peshawar");


// for(let i = 0; i <= 10; i+=2){
//     console.log(i);
    
// }

// for(let i = 0; i <= 20; i++){
//     console.log(i);
    
// }

// for(let i = 0; i <= 20; i++){
//     if(i % 2 !==0){console.log(i);
//     }
// }

// let num1 = 7;

// for(let i = 0; i<=10; i++){
//     let table7 = num1 * i;
//     console.log(table7);
    
// }

// let sum1 = 0;

// for(let i =0; i <=50; i++){
   
//    sum1 = sum1 + i;
//    }

//       console.log(sum1);

//       for(let i = 20; i >= 0; i--){
//      console.log(i);
//       }


// function isPositive(number){
//     if(number >= 1){
//         console.log("this is a positive number");
        
//     }

//     else if(number == 0){
// console.log("The number is Zero");
// }

// else{
//     console.log("this is a negative number");
//     }
// }

// isPositive(8);
// isPositive(0);
// isPositive(-89);

// function checkIsEven(number){
//     if(number % 2 ==0){
//         console.log("The number is Even");
//     }

//     else{
//         console.log("The number is odd");
        
//     }
// }

// checkIsEven(6);
// checkIsEven(9);

// function canVote(age){
//     if(age >=18){
//         console.log("You are eligible to cast a vote");
        
//     }

//     else{
//         console.log("You are ineligible to cast a vote");
        
//     }
// }

// canVote(22);
// canVote(18);
// canVote(16);

// function comparingNumber(a,b){
//     if(a > b){
//         console.log("first number is greater");
//     }

//     else if(a == b){
//         console.log("both number are equal");
        
//     }
//     else{
//         console.log("second number is greater");
//     }
// }

//  comparingNumber(10,27);
//  comparingNumber(89,77);
//  comparingNumber(80,80);

// function checkTemperature(temp){
// if(temp>=30){
//     console.log("The weather is hot");  
// }
// else{
//     console.log("The weather is not hot");
// }
// }

// checkTemperature(45);
// checkTemperature(25);


// let numbers = [10,20,30,40,50];

// let addedResult = numbers.map(number => number + 5);

// console.log(addedResult);

// const prices = [100, 200, 300, 400];

// let priceAfterTax = prices.map(price => price + (price * 0.10) );
// console.log(priceAfterTax);

// const products =[
//     {name: "laptop", price: 1000},
//     {name: "phone", price: 700,},
//     {name: "keyboard", price:100},
//     {name: "mouse", price: 70}
// ];

// let upperCased = products.map(product => product.name.toUpperCase());

// console.log(upperCased);

// let numbers = [2,4,6,8];
// let doubleNumbers = numbers.map(num => num *2);

// console.log();

// let numbers = [2,4,6,8];
// let number10 = numbers.map(num => num + 10);

// console.log(number10);

// let numbers = [2,4,6,8];
// let squareNumbers = numbers.map(num => num * num);

// console.log(squareNumbers);

// let names = ["haider"," arbaz"," saad", "shabaz"];
// let capitalNames = names.map(name => name.toUpperCase());

// console.log(capitalNames[0]);

// let names = ["haider"," arbaz","saad", "shabaz"];
// let helloNames = names.map(name => "Hello " + name.toUpperCase());

// console.log(capitalNames[2]);

// let names = ["haider","arbaz","saad", "shabaz"];
// let lengthNames = names.map(name => name.length);

// console.log(capitalNames);

// let numbers = [3,5,6,10,14,15,61,25,62];
// let greaterThan10 = numbers.filter(num=> num > 10);

// console.log(greaterThan10);

// let numbers = [3,5,6,10,14,15,61,25,62];
// let evenNumbers = numbers.filter(num=> num % 2 === 0);

// console.log(evenNumbers);

// let numbers = [3,5,6,10,14,15,61,25,62];
// let oddNumbers = numbers.filter(num=> num % 2 !== 0);

// console.log(oddNumbers);


// let names = ["haider","arbaz","saad", "shabaz", "ali"];

// let bigNames = names.filter(name => name.length > 4);

// console.log(bigNames);

// let numbers = [3,5,6,10,18,14,15,61,25,62,35,22];

// let youngAdults = numbers.filter(num=> num >= 18 && num <= 35);

// console.log(youngAdults);


// let numbers = [3,5,6,10,18,14,15,61,25,62,35,22];

// let specificNumber = numbers.find(num => num > 15);
// console.log(specificNumber);

// let numbers = [3,5,6,10,18,14,15,61,25,62,35,22];

// let evenNumber = numbers.find(num => num % 2 === 0);
// console.log(evenNumber);

// let names = ["haider","arbaz","saad", "shabaz", "ali"];

//  let bigName= names.find(name => name.length > 4);
//  console.log(bigName);

// let numbers = [5, 12, 7, 19, 24, 31, 8];

// let specificNumber = numbers.find(num => num > 10 && num < 25);

// console.log(specificNumber);


// let numbers = [25, 10, 40, 5, 30];

// let smallestNumber = numbers.reduce((min, num)=>{
// if(min > num){
//     return num;
// }

//     return min;
// })

// console.log(smallestNumber);



// function add (a,b){
//     return a+b;
// }

// function sub (a,b){
//     return a-b;
// }

// function product (a,b){
//     return a*b;
// }

// function divide (a,b){
//     return a/b;
// }


// let calculate = (a,b,callback) => {

//     return callback(a,b);

// }


// console.log(calculate(10,3,add));
// console.log(calculate(10,3,sub));
// console.log(calculate(10,3,product));
// console.log(calculate(10,3,divide));


// function hello(name){
//     return "Hello " + name;
// }

// function goodBye(name){
//     return "Good Bye " + name;
// }

// let greet = (name,callback) => {
//     return callback(name);
// }

// console.log(greet("Haider", hello));


// function getData(dataId, getNextData){
//     setTimeout(()=> {
//         console.log("Data " + dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000)
// }



// getData(1,()=>{
//     getData(2,()=>{
//     getData(3
//     )})}
// )


// console.log("hey Wassup Cutie");


// let promise = new Promise ((resolve, reject) => {
//     console.log("data " + 12);
//     reject("error 404");
//     resolve("success");
//     })

//     function getData(dataId, getNextData){
//   return new Promise((resolve,reject) =>  setTimeout(()=> {
//         console.log("Data " + dataId);
//         resolve("success")
//         if (getNextData) {
//             getNextData();
//         }
//     }, 5000))
// }

// function asyncFunc(){
//    return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
            
//         },4000)
//     })
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
            
//         },4000)
//     })
// }

// console.log("fetching Initial Data");
// asyncFunc().then((res)=>{

//     console.log("fetching Secondary Data");
//  asyncFunc2().then((res)=>{
//     })
// })


// function getData(dataId){
//    return new Promise((resolve,reject) => {
//     setTimeout (()=> {
//         console.log("Data " + dataId);
//         resolve("Success")
//     }, 2000);
// })
//    }

// console.log("getting data1...");

// getData(1).then((res)=>{
//     console.log("getting data2...");
//     return getData(2);
// }).then((res)=>{
//     console.log("getting data3...");
//     return getData(3)
// }).then((res)=>{
//     console.log(res);
    
// })


// async function getWeatherData() {
//     setTimeout(()=>{console.log("Weather Data");

//     },2000)
//     }

// async function weather(){
//     await getWeatherData();
//     await getWeatherData();
//     await getWeatherData();
// }

// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve("success")
            
//         },2000)
//     })
// }

// async function getWeatherData() {

//     await api();
//     await api();
//     let result = await api();
// console.log(result);

    
// }

// getWeatherData();


function getData(dataId){
   return new Promise((resolve,reject) => {
    setTimeout (()=> {
        console.log("Data " + dataId);
        resolve("Success")
    }, 2000);
})
   }

//    async function getAllData() {
    
//     console.log("getting result 1....");
    
//     await getData(1);
//     console.log("getting result 2....");
//     await getData(2);
//     console.log("getting result 3....");
//     await getData(3);
//     console.log("getting result 4....");
//     await getData(4);
//     console.log("getting result 5....");
//     let result = await getData(5);

//     console.log(result);
    
//    }


    (async function () {
    
    console.log("getting result 1....");
    
    await getData(1);
    console.log("getting result 2....");
    await getData(2);
    console.log("getting result 3....");
    await getData(3);
    console.log("getting result 4....");
    await getData(4);
    console.log("getting result 5....");
    let result = await getData(5);

    console.log(result);
    
   })()





