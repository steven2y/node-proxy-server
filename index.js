/* global process :false, require:false, console:false
 */


var proxy, host, port, express, app, request, r, debug;

proxy = process.argv[2]; //the proxy you are trying to get round
host = process.argv[3]; //the target
port = process.argv[4]; //port on localhost
debug = process.argv[5];

express = require('express');
app = express();
request = require('request');
r = request.defaults({'proxy':proxy});

if (debug === 'true') {
    app.use(express.logger());
}

app.all('*', function(req,res) {
    'use strict';
    //modify the url in any way you want
    req.pipe(r(host + req.url)).pipe(res);
});


var server = app.listen(port, function() {
    'use strict';
    console.log('Starting Proxy');
    console.log('Proxy:', proxy);
    console.log('Host:', host);
    console.log('Debug:', debug);

    console.log('Proxy listening on port %d', server.address().port);
});
