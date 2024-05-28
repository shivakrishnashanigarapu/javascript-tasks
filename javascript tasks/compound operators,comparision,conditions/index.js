//compound operator

let n=10
let n2=20
console.log(n+n2)

//addition
n+=10// its acts like n+10, here n = 20
console.log(n)

 //n2+=20 // equation like n2+20 ie 20+20,n2=40, 
console.log(n+n2)

//subtraction

//n-=5
console.log(n)
console.log(n-n2)

//multiplication

//n*=2
console.log(n)
console.log(n*n2)

//division

//n/=2
console.log(n)
console.log(n/n2)

//exponential

//n**=2
console.log(n)

//comparisoin operators

let x=10
let y=20
let z=10
//lessthan
let z1=x<y
console.log(z1)//true
let a1=y<x
console.log(a1 )//false
//greaterthan
let z2=y>x
console.log(z2)//true
let a2=x>y
console.log(a2)//false
//lessthan or equalsto
let z3 = x<=y
console.log(z3)//true     
let a3 = y<=z
console.log(a3)//false //3 senarios are here if it lessthan its true, if it equals its true, if it greater its false 
//greaterthan or equalsto
let z4 = y>=x
console.log(z4)//true
let a4 = x>=y
console.log(a4)//false ///3 senarios are here if it greaterthan its true, if it equals its true, if it lessthan its false 

//double equalsto    LHS=RHS
let a=2
let b='2'
let c=3
let check=a==b
console.log(check) //true // just its see equal or not ignore what type of datatype,implicit coertion occur here
let check1 = (a==c)
console.log(check1)//false

// not equalsto

let check2 = a===b
console.log(check2)// false// its see both equall and same data type

//conditions
//if condition
let num = 5
let num2=10
let condition = 10>5
console.log(condition) //true

if(condition){
    console.log('my name is shivakrishna')
    console.log('am from warangal')
    let age=23
    console.log('years',age)
}
else{
    console.log('dilip','raghu','rambabu','shiva')
}


//logical operators=> and,or,not=> boolent variable,boolent output
