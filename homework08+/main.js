function cloneObject(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    const clone = Array.isArray(obj) ? [] : {};
  
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clone[key] = cloneObject(obj[key]);
      }
    }
  
    return clone;
  }
  
  let object1 = { name: { fname: 'andy', lname: 'howe' }, age: 45 };
  let object2 = cloneObject(object1);
  object2.name.fname = 'bobby';
  
  console.log(object1); // { name: { fname: 'andy', lname: 'howe' }, age: 45 }
  console.log(object2); // { name: { fname: 'bobby', lname: 'howe' }, age: 45 }
  