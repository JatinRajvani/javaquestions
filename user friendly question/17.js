// 17. **Find the Intersection of Two Arrays** 
a=[1,2,3,8,9]
 b=[2,3,6,9,8]
let intersection=(a,b)=>{
  let tem=[]
for(let element of a){
  if(b.includes(element)){
    tem.push(element)
  }
} return tem
}
console.log(intersection(a,b))





