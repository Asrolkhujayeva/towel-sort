module.exports = function towelSort (matrix) {
  if (arguments.length === 0) {
    return [];
}

return matrix.reduce((acc, elem, index) => {
    if ((index + 1) % 2 === 0) {
        acc.push(...elem.reverse());
        return acc;
    } else {
        acc.push(...elem)
    }
    return acc;
  }, []);
}