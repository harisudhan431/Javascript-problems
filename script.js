// Question Number=1
// let a;
// for(a=0;a<=100;a++){
//     if(a%3==0&&a%5==0)
//         console.log("FizzBuzz");
//     else if(a%3==0)
//         console.log("Fizz");
//     else if(a%5==0)
//         console.log("Buzz");
//     else
//     console.log(a);
// }

// Question Number =2

function palindrome(str){
    
    let a=0;
    let count=str.length;
   
    for(a=str.length-1,b=0;a>=0;a--,b++){
        if(str.charAt(b)==str.charAt(a))
            count--;
    }
    if(count==0) 
        console.log("True");
    else
    console.log("False");

}
palindrome("racecar");

// Question Number=3
function longest(arr){
    let max=arr[0];
    for(a=1;a<arr.length;a++){
        if(arr[a]>max)
            max=arr[a];
    }
    console.log(max);
}
let a=[3,5,1,6,8,2];
longest(a);

// Question Number=4

let str = "HARISUDHAN"
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == "H") {
        count += 1;
    }
}
console.log(count);


// Question Number=5

function longestword(str){
    let max = 0;
let word = "";
for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
        if (max < word.length) {
            max = word.length;
            word = word;
        }
        word = "";
    } else {
        word += str[i];
    }
}
console.log(word);

}
longestword("HARI SUDHAN PON VENKADESH");


// Question Number=6
function factorial(num){
    let fact=1;
    for(let a=1;a<=num;a++)
        fact*=a;
    console.log(fact);
}
factorial(5);

// Question Number=7

function celsiustoFahrenheit(temp){
    fahren=(9/5)*temp+32;
    console.log(fahren);

}
celsiustoFahrenheit(1);

// Question Number=8

function distinct(arr){
    let a=1;
    for(let b=0;b<arr.length;b++,a++){
        if(a!=arr[b]){
            console.log(a);
            a+=1;
        }
    }

}

var arr=[1,2,3,4,6,8,9,10];
distinct(arr);