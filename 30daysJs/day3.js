// Activity 1:
const person1 = 18

if(person1>0){
    console.log('Number is positive');
} else if(person1<0){
    console.log('Number is negative');
} else {
    console.log('Number is Zero');
}

if(person1>=18){
    console.log('Eligible to vote!');
} else{
    console.log('Not eligible to vote!');
} 



// Activity 2:

const a=3
const b=5
const c=1

if(a>b && a>c){
    console.log('Largest number amongst all is a');
} else if(b>c){
    console.log('Largest number amongst all is b');
} else{
    console.log('Largest number amongst all is c');
}

// switch case 
// Activity 3:

const score = 70

switch (true) {
    case score > 90:
        console.log('Grade: A');
        break;
    
    case score > 80:
        console.log('Grade: b');
        break;
    
    case score > 60:
        console.log('Grade: C');
        break;

    case score > 50:
        console.log('Grade: D');
        break;
    default:
        console.log('Grade: F');
        break;
}

// Switch case is evaluated for precise value,
// evaluation of imprecise value takes swtich case into the consideration only when switch (condition) condition value is passed true.


// Activity 4:
const numChk = 17

const oddOrEven = numChk%2==0 ? 'Even':'Odd'
console.log(oddOrEven); 


// Activity 5: Leap year check script!

const leapYear = 1900

if(leapYear%4==0){
    if(leapYear%100==0 && leapYear%400==0)
    {
        console.log(`Year:${leapYear} is a leap year`);
    }
    else if(leapYear%100!=0)
    {
        console.log(`Year:${leapYear} is a leap year`);
    } else {
        console.log(`Year:${leapYear} is not a leap year!`);
    }
} else {
    console.log(`It is not a leap year..!`);
}