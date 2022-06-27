
//1// An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

// function  isSpecialArray(arr){
// let i = 0,
//     z = 0,
//     c = 0;
// while (i < arr.length){
//     if(i % 2 === 0 && arr[i] % 2 === 0){
//        z++; 
//     }
//     if( i % 2 === 1 && arr[i] % 2 === 1){
//         z++;
//     }
//     i++;
// }

// if( z === arr.length){
//     console.log(true);
// }
// else console.log(false)}

// isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) 

// isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) 

// isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])


//2//Create a function that returns ***true*** if all parameters are truthy, and ***false*** otherwise.
function allTruthy(a = 1,b = 1,c = 1, d =1, i = 1,f = 1){
    if(a > 0 && b > 0 && c > 0 && d > 0 && i > 0 && f > 0){
        console.log(true);
    }else console.log(false);
}
allTruthy(true, true, true)

allTruthy(true, false, true)

allTruthy(5, 4, 3, 2, 1, 0)

3//Create a function that returns the mean of all digits.
// function mean(x){
//     let sum=0,
//         y=1,
//         i=0;
//     while (x) {
//     sum += x % 10; 
//     i++
//     x = Math.floor(x / 10); //կլորացնի թիվը
//     y=sum/i
// }

// console.log(`թվերի գումարը=${sum} իսկ միջինը=${y}`);
// }
// mean(42)
// mean(12345)
// mean(666)


















