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

function discountedPrice(price, discount){
     discount = (price * discount) / 100;
    return price - discount ;
}

let discount1 = discountedPrice(1500,20);
console.log(discount1);

// function fullSentence(name,age,city){
//     console.log("My name is "+ name, ". I am " + age +" Years Old. ", "I am from "+city);
    
// }

// fullSentence("Haider Bakhtiar", 22, "Peshawar");