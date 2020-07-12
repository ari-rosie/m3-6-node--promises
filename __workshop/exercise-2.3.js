// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

const greeting = (langCode) => {
    return new Promise((resolve, reject) => {
    resolve(request(`https://journeyedu.herokuapp.com/hello/${langCode}`));
    })
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {

        return parsedResponse.data; 
    })
    .catch((err) => {
        return err.error ? JSON.parse(err.error) : err;
    })
};

// Testing
greeting('f').then((result) => console.log(result)); 

