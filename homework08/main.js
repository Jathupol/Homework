function mergeObjects(...objects) {
    const result = {};
  
    for (const obj of objects) {
      for (const [key, value] of Object.entries(obj)) {
        if (!(key in result) || key === 'gender') {
          result[key] = value;
        }
      }
    }
  
    return result;
  }
  
  let obj1 = { name: "Andy", age: 25 };
  let obj2 = { gender: "M", age: 30 };
  let obj3 = { name: "Bobby", age: 35 };
  
  console.log(mergeObjects(obj1, obj2, obj3)); // { name: 'Andy', age: 25, gender: 'M' }
  console.log(mergeObjects(obj2, obj3, obj1)); // { name: 'Bobby', age: 30, gender: 'M' }
  