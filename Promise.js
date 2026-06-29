const promise1 = new Promise((resolve, reject) => {

    // resolve function - success
    // reject function - error

    setTimeout(() => {
        resolve("Work completed successfully");
    }, 1000);

});

// then() runs when promise is resolved
promise1.then((value) => {
    console.log(value);
});

// catch() runs when promise is rejected
promise1.catch((error) => {
    console.log(error);
});

// show promise object
console.log(promise1);