// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = () => {
  return new Promise((resolve, reject) => {
    resolve(request('http://api.open-notify.org/iss-now.json'));
  })
  .then((response) => JSON.parse(response))
  .catch((err) => console.log('Error: ', err))
};

getIssPosition().then((result) => console.log(result));