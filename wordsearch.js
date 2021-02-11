// By Luke Yin (SPARTAN-501) and Kevin Phan (dattphan15)

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    // console.log(horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const vertical = transpose(letters);
    const verticalJoin = vertical.map(ls => ls.join(''));
    // console.log(verticalJoin);
    for (l of verticalJoin) {
      if (l.includes(word)) return true
  }
    return false;
}

const transpose = function(matrix) {
  // Put your solution here
  let m = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let d = [];
    for (let j = 0; j < matrix.length; j++) {
      d.push(matrix[j][i]);
    }
    m.push(d);
  }
  return m;
};

module.exports = wordSearch
