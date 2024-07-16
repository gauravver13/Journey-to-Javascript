// Activity 1:

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.forEach(element => {
    console.log(element)
});

// for (const ele in array) {
//         console.log(ele);
//         const element = array[ele];
//         console.log(element);
// }

for (const elem of array) {
    console.log(`5*${elem} =`,5*elem );
    
}


// Activity 2:

let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }

let i=1
while(i<=10){
    sum += i;
    i++;
}

console.log(sum);

let num = 10
// never take any token, keyword as variable like Number, bool etc..

while(num>0) {
    console.log(num)
    num--
}


// Activity 3:

let doNum = 1
do{
    console.log(doNum);
    doNum++
} while(doNum<6)


let factNum = 5
let ans = 1

do{
    ans *= factNum--
    // pre and post operator!
}while(factNum>0)

console.log(ans);

// Activity 4:
for (let k = 1; k <= 5; k++) {
    for (let l = 1; l <= k; l++) {
        process.stdout.write('*')
    }
    console.log('')
}

// Activity 5:
let n = 1

while(n<=10){

    if(n==5){
        n++;
        continue;
    }
    console.log(n);
    n++;
}

n=1

while(n<=10){
    if(n==7)
        break;
    console.log(n);
    n++
}