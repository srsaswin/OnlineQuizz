let n = 8

let count = 0

while(n != 1){
    if(n % 2 != 0) count ++;
    count++;
    n = (n / 2) | 0
}

console.log(count)