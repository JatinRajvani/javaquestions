// 13. **Check if a Number is Prime** 
function isPrime(n){
    if (n<=1) return false;
    for(let i=2;i*i<=n;i++){
      if(n%i===0) return false;
    
    }console.log(n,"is a prime number");
    }console.log(isPrime(2)); 