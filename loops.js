function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`"I am ${i} strange loop."`)
    } else if (i !== 1) {
      array.push(`"I am ${i} strange loops."`)
    } 
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    n--;
    return n;
  }
}