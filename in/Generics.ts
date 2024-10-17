function identity<T> (arg: T): T {
  return arg;
}

let output = identity<string>("mystring");
let output2 = identity<number>(10);

// Create a generic function that takes an array of any type and returns the first element.

function genericArray <T> (T: T[]): T {
  return T[0];  
}

let genArray = genericArray<string>(['hello', 'world']);
let genNumber = genericArray<number>([1,2,3,4])