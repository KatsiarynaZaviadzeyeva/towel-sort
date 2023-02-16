module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }
    let array = matrix.reduce((acc, elem, ind) => {
        elem.sort((a, b) => !(ind & 1) ? a - b : b - a).map(e => acc.push(e));
        return acc;
    }, []);
    return array;
}
