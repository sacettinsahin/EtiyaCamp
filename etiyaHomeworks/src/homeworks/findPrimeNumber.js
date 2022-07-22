const findPrime = (...num) => {
    for (let i = 0; i<num.length; i++) {
      let findPrime = true;
      if (num[i] <= 1 ){
        console.log(num[i] + " : asal sayı değildir.");
      }
      else if (num[i]===2) {
        console.log(num[i] +" : asal sayıdır.")
      }
      else {
         for (let j = 2; j < num.length; j++) {
           if (num[i] % j === 0) {
             findPrime = false;
             break;
           }
         }
  
        if (findPrime) {
          console.log(num[i] +  " : asal sayıdır");
        } else {
          console.log(num[i] +  " : asal sayı değildir");
        }
      }
    }
  };
 
  findPrime(-5,1,2,137,457,15798,551);