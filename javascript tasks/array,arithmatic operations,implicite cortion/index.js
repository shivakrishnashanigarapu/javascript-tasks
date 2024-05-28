//objects
let person={
    friendName : "dilip",
    age : 22,
    isHeCompletedBtech : true,
    isHeGoUs :null,
    adhaarNo :41977364832841977
}
checkThePerson = typeof(person)
console.log(checkThePerson);

let arr =['rambabu','shiva','raghu','dilip',20,true]

console.log(arr)


// simple arithematical operations
//simple addition

let num1=35
let num2=45
let num3=55
let num4=65
let num5=25

//addition of numbers=

console.log(num1+num2+num3 )
console.log(num1+num2+num3+num4+num5 )

//simple subtraction

let numb1=10
let numb2=20
let numb3=30

console.log(numb1-numb2-numb3)

//multiplication

console.log(numb1*numb2)
console.log(numb1*numb2*num5)

//division

console.log(numb3/numb1)
console.log(num5/numb1)

//exponentiation

console.log(numb1**numb1)

let numb4=3

console.log(numb2**numb4)

//modulus

console.log(numb2%numb4)

//complex operations

console.log(numb1+numb2*numb1-numb2/numb1)  // BODMAS
//         10     +  200   -     2
//         208

let n1=1
let n2=2
let n3=3
let n4=4
let n5=5

console.log(n1+n2+n2**n3*n4+n4-n5/n1)
//             1+  2 +8*4+4 - 5
//              1+2+32+4-5 
//                34 

//implicite coertion
 let name='20'
 let name2='shiva'
 let name3=20
 let name4=true

 console.log(name+name2)
 console.log(name+name2+name3) // number automatically converted into string
 console.log(name+name3)// number automatically converted into string,it is only apply for addition
 console.log(name-name3)

 //explicit coertion

 console.log(name3+ +name)
console.log(+name+name4)//converting manually by using plus

let sum = Number(name)+ name3
console.log(sum)  // converting manually by adding Numberdatatype