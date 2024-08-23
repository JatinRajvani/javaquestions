// 9. **Count the Number of Properties in an Object** 
const object={name:"Jatin",Age:19} 
let d=Object.keys(object).length //IT IS USED TO COUNT THE NUMBER PROPERTY IN OBJECT.
console.log(d)
                               //SECOND WAY
   let total=0
   for(let properties in object){
    total+=1
   }                            
      console.log(total)
