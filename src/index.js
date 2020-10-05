

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  for (let i=0; i<matrix.length; i++){
    if(!(i%2==0)){
        matrix[i].reverse();
    }
  }

  let result = [].concat(...matrix );
  return result;

}
