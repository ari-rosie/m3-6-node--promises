// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  promise = new Promise((resolve, reject) => {
    for (const word in array) {
      if (typeof array[word] === 'string')
        array[word] = array[word].toUpperCase();
      else
        reject('not all words');
    }
    resolve(array);

  })
  return promise;
};

const sortWords = (array) => {
  promise = new Promise((resolve, reject) => {
    array.sort();
    resolve(array);
    reject("can't be sorted");
  }) 
  return promise;
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

