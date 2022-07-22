//örneğin 6 sayısının bölenleri sırası ile 1, 2, 3 ve 6 rakamlarıdır. 
//Böylece bu pozitif bölenler birbiri üzerinde toplandığı vakit 12 sayısı ortaya çıkar. 
//12 sayısı da 6 sayısının 2 katı olduğu için altı rakamı mükemmel sayı olarak değerlendirilir.
// 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function perfectNumbers(){
    let numbers=[];
    let sum = 0;
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < i; j++) {
            if(i%j==0){
                sum += j;
            }
        }
    }
    if (i = sum) {
        console.log(i + " : Perfect Number!")
    }
}
perfectNumbers();