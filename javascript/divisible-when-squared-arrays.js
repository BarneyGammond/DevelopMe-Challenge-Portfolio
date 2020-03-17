//functions set to find which values, when squared, will be divisible by 3

let squares = values => {
    let squared = [];
    for (let i=0 ; i<values.length ; i+=1) {
        squared.push(values[i] * values[i]);
    }
    return squared;
    
};

let divisibleBy3s = array => {

    let divisible = [];

    for (let i=0 ; i<array.length ; i+=1) {
        if (array[i] % 3 === 0) {
            divisible.push(array[i]);
        }
    }   
    return divisible;
}

let squaresDivisibleBy3 = array => divisibleBy3s(squares(array));1

//A short test for the function
console.log(
    squaresDivisibleBy3([-3, -2, -9, 3, 4, 5, 6, 7, 8, 9]), // [9, 81, 9, 36, 81]
);
