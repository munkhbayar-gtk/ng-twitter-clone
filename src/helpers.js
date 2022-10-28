
Array.prototype.in = function(vl) {
  for(let i = 0 ; i < this.length; i ++) {
    if(this[i] === vl) return true;
  }
  return false;
}

function has(vl, values) {
  return values.in(vl);
}
