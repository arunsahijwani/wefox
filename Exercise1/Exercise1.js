function randomInts(n){
    var arr = new Array(500);
    for(i=0;i<arr.length;i++){
        arr[i]=Math.round(500 * Math.random());
    }
    arr.sort((a, b) => a - b);
    console.log(arr[n-1]);
}

//Replace integer with the nth smallest position of the value you want printed
randomInts(14);