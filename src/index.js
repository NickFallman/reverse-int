const intNum = -123;    // -321

// module.exports = 
function reverse (n) {
  let resInt = n;
  console.log(resInt);
  resInt = parseInt(
    resInt
      .toString() // start conveyor. converts the given Int number into a String Num = > 'Num'
      .split('')  // converts the String into an Array of characters 'Num' => ['dig1'(msd), 'dig2', ... , digN(lsd)]
      .reverse()  // reverses the order of the items in the array ['dig1'(msd), 'dig2', ... , digN(lsd)] => ['digN'(lsd), 'digN-1', ... , dig1(msd)]
      .join('')   // reassembles the reversed characters into a String ['digN'(lsd), 'digN-1', ... , dig1(msd)] => 'revNum'
  ) * Math.sign(n);
  console.log(resInt);
  return (resInt);                 
}

const result = reverse (intNum);
// console.log(result);
