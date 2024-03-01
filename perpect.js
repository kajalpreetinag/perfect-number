const number = require("readline-sync")
 let n = number.question("enter number: ");
 let a=n
 let i = 1;
 let sum = 0
 while(n>i){
     if(n%i==0){ 
     sum=sum+i; 
     }
     i++;
 }
 console.log(sum);
 console.log(a);
 if(sum==a){
     console.log("n is perpect num=",n);
 }else{
     console.log("n is not perpect num");
 }