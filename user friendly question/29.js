// 29. **Calculate the LCM of Two Numbers** 
//que-29 (finding lcm)
a=4
 b=6
const lcm =(a,b)=>{
  for(i=0;i<=30;i++){
    c=i*a
    d=c%b==0
    if(d&&c!=0){
      return ("Lcm of 'a' and 'b' is",c)
    }
  }
}

console.log(lcm(a,b))
                          //  Or
for(i=0;i<=30;i++){
  c=i*a
  d=c%b==0
  if(d&&c!=0){
    console.log("Lcm of 'a' and 'b' is",c)
    break
  }
}