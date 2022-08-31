var figlet = require('figlet');
var colors = require('colors');
figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.green)
});


/* This thing will prnt out word art.
you can download all dependencies with npm install */