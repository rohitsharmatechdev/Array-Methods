/**
 * Call the defined callback function on each element of an array and return an array that contains the result. 
 * @Return <Array> new created
 */
const originalArray = [1,2,3,5,6,4];
const newMapArray = originalArray.map(ele => ele*2);
console.log(`MAP: origial Array: ${JSON.stringify(originalArray)} Mapped: ${JSON.stringify(newMapArray)}`);

/**
 * Returns the element of an array that meet the condition specified in the callback funcion.
 * @Return <Array> new created
 */
const filteredArray = originalArray.filter(ele => ele % 2 === 0);
console.log(`FILTER: origial Array: ${JSON.stringify(originalArray)} Filtered: ${JSON.stringify(filteredArray)}`);

/**
 * Determine whether specified callback function return true for any element of any array.  
 * @Return <Boolean>
 */
const isAnyOdd = originalArray.some(ele => ele % 2 === 0);
console.log(`SOME: origial Array: ${JSON.stringify(originalArray)} isAnyOdd: ${JSON.stringify(isAnyOdd)}`);

/**
 * Determine the all the member of an array satisfied the specified test.
 * @Return <Boolean>
 */
const isEveryOddNumbers = originalArray.every(ele => ele % 2);
console.log(`EVERY: origial Array: ${JSON.stringify(originalArray)} isEveryOddNumbers: ${JSON.stringify(isEveryOddNumbers)}`);

/**
 * Return the accumulated result
 * @Return single value
 */
const sumOfAllEle = originalArray.reduce((acc, ele) => acc + ele);
console.log(`REDUCE: origial Array: ${JSON.stringify(originalArray)} sumOfAllEle: ${JSON.stringify(sumOfAllEle)}`);

// make object key will be ele and value is true
const makeObj = originalArray.reduce((acc, ele) => {
    acc[ele] = true;
    return acc;
}, {});
console.log(`REDUCE: origial Array: ${JSON.stringify(originalArray)} makeObj: ${JSON.stringify(makeObj)}`);

/**
 * Return the value of the first element
 * @Return <*> finded element otherwise undefined
 */
const findElement = originalArray.find(ele => ele === 4);
console.log(`FIND: origial Array: ${JSON.stringify(originalArray)} findElement: ${JSON.stringify(findElement)}`);

/**
 * Return the index of the first element.
 * @Return <Number> index of finded element otherwise -1
 */
const findIndexElement = originalArray.findIndex(ele => ele === 4);
console.log(`FINDINDEX: origial Array: ${JSON.stringify(originalArray)} findElement: ${JSON.stringify(findIndexElement)}`);


/**
 * Sort an array in place
 * @Return <Array> sorted array, original array will be mutates
 */
const sortedArray = originalArray.sort((a,b ) => a - b);
console.log(`SORT: origial Array: ${JSON.stringify(originalArray)} sortedArray: ${JSON.stringify(sortedArray)}`);
