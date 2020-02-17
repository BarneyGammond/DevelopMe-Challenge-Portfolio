//Function for finding the lowest number within an array

let lowest = array => {

    let low = 0;

    for (let i=0 ; i<array.length ; i+=1) {

        if (i === 0) {low = array[i]};

        if (array[i] < low) {low = array[i]};
    }
    
    return low;
}

console.log(
    lowest([2, 4, 6, 4, 7, 5]), // 2
    lowest([-2, 4, 6, -7, 5]), // -7
    lowest([-2, -4, -11, -8, -4, -7, -5]), // -11
);