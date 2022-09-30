let fibonacci = [0,1];
    
    function listFibonacci(num) {
    // starting at array index 1, and push current index + previous index to the array
        for (let i = 1; i < num; i++) {
            fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
        }
        console.log(fibonacci);
    }
    
    listFibonacci(10);