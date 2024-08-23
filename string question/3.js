// 3. **Count the Number of Vowels in a String**
let value="hello"
a=value.split("")  
count=0;
for (i of a){
    
    if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
        count+=1;
        
    }
}console.log("the number of vowels in string is",count)