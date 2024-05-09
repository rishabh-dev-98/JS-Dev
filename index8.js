//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
let promise = new Promise(function(resolve, reject){
    var x = 10;
    if(x%2 == 0){
        resolve();
    } else {
        reject();
    }
});

promise.then(
    function() {
        return "even number"
    },
    function() {
        return "odd number"
    }
).catch(
    function() {
        return "some error appeard."
    }
)