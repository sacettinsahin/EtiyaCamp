const number1 = 220
const number2 = 284

let total1 = 0
let total2 = 0

for (let i = 0; i < number1; i++) {
  if(number1 % i == 0){
     total1 = total1 +i;
  }   
}
for (let i = 0; i < number2; i++) {
   if(number2 % i == 0){
      total2 = total2 +i;
   }   
}
if (number1 == total2 && number2 == total1) {
   console.log("number1 ve number2 arkadaş sayilardir.")
}else{
   console.log("number1 ve number2 arkadaş sayilar degildir.")
}
