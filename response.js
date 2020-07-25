//Error 1: http misspelled in require
var http = require('http');
//Error 2: function misspelled
var myname = function() {
    //Error 3: removed console.log and replaced with a return statement so that the variable would have something to hold AND write to the console below
    return "Here is my IP address:";
}
//Error 4 and 5: async designation missing from callHttpbin() and callHttpbin() was misspelled
async function callHttpbin() {
    let promise = new Promise((resolve, reject) => {
        http.get(
            'http://httpbin.org/ip',
            function(response) {
                var str="";
                response.setEncoding('utf8');
                response.on('data', function(data){
                    str += data;
                });
                response.on('end', function() {
                    var result = JSON.parse(str);
                    myips = result.origin;
                    //Error 6: desired data not provided to reslove
                    resolve(myips)
                });
            }
        );
    });
    //Error 7: no value returned, I went ahead and simplified the return statement to return await promise from
    //let result = await promise;
    //return result;
    return await promise;
}
//Error 8 and 9: async designation missing from executeAsyncTask(), closing curly brace missing from executeAsyncTask()
async function executeAsyncTask(){
    const valueA = await callHttpbin();
    const valueB = myname();
    console.log(valueB+" "+valueA)
}
//Error 10: function not called to execute
executeAsyncTask();

