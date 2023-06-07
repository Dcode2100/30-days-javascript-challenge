const obj = {
    name: 'John',
    regularMethod: function() {
      console.log(this.name);
    },
    arrowMethod: () => {
      console.log(this.name);
    }
  };
  

  obj.regularMethod(); // Output: John
  obj.arrowMethod();

// Below question is about the difference between objects creations
  const obj1 = { name: 'John' };
  const obj2 = new Object({ name: 'Jane' });
  const obj3 = Object.create(null);
  
  console.log(obj1, obj2, obj3);
// output is {name: "John"} {name: "Jane"} {} since obj3 is empty object and obj2 is created using new keyword and obj1 is created using object literal syntax
// literal syntax is faster than new keyword and also they are same
