//two functions to find the total of all values from two different arrays

let sum = (values) => {
    let total = 0;
    for (i=0 ; i<values.length ; i+=1) {
        total += values[i];
    }
    return total;
}

let sumBoth = (values1,values2) => sum(values1) + sum(values2);

console.log(
    sumBoth([2, 3, 4, 5, 6], [1, 2, 3, 4]), // 30
    sumBoth([2, 3, 4, 5, 6], [5, 10, 12]), // 47
);