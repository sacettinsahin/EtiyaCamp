let isPrime

function primeNumbers(){
    let numbers = [];
    for (let i = 2; i < 1000; i++) {
        isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i%j === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime===true){
            numbers.push(i);
        }    
    }
    console.log(numbers);
}
primeNumbers();