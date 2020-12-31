// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
let unsorted = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];


let cleanRoom = arr => {
    let sorted = arr.sort((a, b) => a - b);

    let transition = [];
    let result = [];

    for (let i = 0; i <= sorted.length; i++) {
    // determine if number is a duplicate of previous number or is the first number
        if ( i === 0 || sorted[i] === sorted[i -1] ) {
    // if so, move numbers into temporary array
            transition.push(sorted[i]);
        }
        else {
    // if not first number or duplicate, push anything in the temporary array into result (groupr or single)
            result.push(transition);
    // empty the temporary array
            transition = [];
    // add current item to temporary array
            transition.push(sorted[i]);
        }
    }
    return result
}


// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

let arr1 = [1,3,5,2,8,10,15] //12
let arr2 = [6,2,5,7,1] //6

//write function tthat takes an array and a target
let addFind = (arr, target) => {
    // add array for matching numbers
    let result = [];
    // loop for first num
    for (let i = 0; i < arr.length; i++) {
    // loop for second num
        for (let j=i+1; j < arr.length; j++) {
    // add and check for target
            if (arr[i] + arr[j] === target) {
    // push matching numbers to result arr
                result.push(arr[i])
                result.push(arr[j])
            }
        }
    }
    return result
};

