//1.sum of 1st 100 natural numbers
let sum =0
for(let i=1;i<=100;i++){
    sum=sum+i
    console.log(sum)
} 

//2.factorial

let x=3;
let y=1
for(let i=1;i<=x;i++){
    y *=i;
}
console.log(y);

//3.multiplication table of a given number
let table=1//prompt()
for(let i=1;i<=10;i++){
    let tables=`${table}*${i}=${table*i}`
    console.log(tables)
}
//4.finding prime numbers below 100
for(let i=2;i<=100;i++){
    let isPrime=true;
    for(let j=2;j<i;j++){
        if(i%j==0){
            isPrime=false;
            break;
        }
    }

    if(i>1 && isPrime){
        console.log(i);
    }
}    




//finding sequence of square numbers
//for(i=1;i<=100;i++){
 //   let square=`${i}**${2}=${i**2}`
 //   console.log(square)
//}