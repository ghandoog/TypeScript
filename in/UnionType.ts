let UnionType: string | number;

UnionType = "stringUnion"
UnionType = 10


// Create a function that takes a parameter which can be either a string or a number. Return the length if it’s a string or double the value if it’s a number.

function lengthOrNumber(param: string | number): string | number {
  if (typeof param === 'string') {
    return param.length
  }
  else if(typeof param === 'number'){
    return param * 2
  }
  else{return param;}
}