
exports.min = function min (array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 0
    }

    let min = array[0];
    array.forEach(elem => {
        if (elem <= min) {
            min = elem;
        }
    });

  return min;
}

exports.max = function max (array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 0
    }

    let max = array[0];
    array.forEach(elem => {
        if (elem >= max) {
            max = elem;
        }
    });

  return max;
}

exports.avg = function avg (array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 0
    }
    
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    
     return sum/array.length;
    
}
