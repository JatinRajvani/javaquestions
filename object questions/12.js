// 12. **Convert an Array of Objects to a Single Object**
// (To Converting an Array of Objects to a Single Objec)
const arr = [{ key1: 'value1' }, { key2: 'value2' }, { key3: 'value3' }];

const result = Object.assign({}, ...arr);

console.log(result); 