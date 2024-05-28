//1. checking whether the number is even or odd
let number=5
let number1=2
check=(number%number1)
if(check === 0){
    console.log(number + ",even number")
}else{
    console.log(number + ",odd number")
} 

//2.checking the number is positive or not
 if(number>0){
    console.log(number+",is positive")
 }
 else if(number<0){
    console.log(number+",is negative")
 }
else{
    console.log(number+",zero")
}

//3.which digit number is this
a=1001
b=9
c=99
d=999
e=9999
if(a<=b){
    console.log(a+",1 digit number")
}
else if(a<=c){
    console.log(a+",2 digit number")
}
else if(a<=d){
    console.log(a+",3 digit number")
}
else if(a<=e){
    console.log(a+",4 digit number")
}
else{
    console.log(a+",more than 4 digit number")
}

//4.the number is smallest 4 digit number or not
f=1000
if(a<f){
    console.log(a+",not a smallest 4 digit number")
}
else if(a===f){
    console.log(a+",is a smallest 4 digit number")
}
else{
    console.log(a+"not a smallest 4 digit number")
}

//5.given character is uppercase or lowercase or special character
x="@"//based on ASCII//american standard code for information interchange
g=47
h=57
i=65
j=90
k=96
l=122
m=127
if(x<=g){
    console.log(x+",is a special character")
}
else if(x<=h){
    console.log(x+",is a number ")
}
else if(x<=i){
    console.log(x+",is a special character ")
}
else if(x<=j){
    console.log(x+",is a uppercase ")
}
else if(x<=k){
    console.log(x+",is a special character ")
}
else if(x<=l){
    console.log(x+",is a lowercase  ")
}
else{
    console.log(x+",is a special character")
}

//6. leap year or not
year =1700
A=4
B=100
C=400
if(year%A,B,C===0){
    console.log(year+"is a leap year")
}
else{
    console.log(year+",not a leap year ")
}
//7.divisible by 5 or not
num=20
num2=5
divisible=(num%num2)
if (divisible===0) {
    console.log(num+",is divisible by 5")
}
else{
    console.log(num+",not divisible by 5")
}
//8. maximum number of three numbers
let numb1=140
let numb2=130
let numb3=120
if (numb1>numb2&&numb1>numb3) {
    console.log(numb1+",is a maximum number")
}
else if (numb2>numb1&&numb2>numb3) {
    console.log(numb2+",is a maximum number")
}
else{
    console.log(numb3+",is a maximum number")
}

//9.minimun number of three numbers
if (numb1<numb2&&numb1<numb3) {
    console.log(numb1+",is a minimum number")
}
else if (numb2<numb1&&numb2<numb3) {
    console.log(numb2+",is a minimum number")
}
else{
    console.log(numb3+",is a minimum number")
}

// 3 integers can form triangle or not
let side1=3
let side2=4
let side3=5
if (side1+side2>side3&&side2+side3>side1&&side3+side1>side2) {
    console.log(side1,side2,side3 + ",form a triangle")
}
else{
    console.log(side1,side2,side3 +",not form a triangle")
}