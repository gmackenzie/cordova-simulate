// Copyright (c) Microsoft Corporation. All rights reserved.

var http = require('http'),
    url = require('url');

module.exports.attach = function (app) {
    app.all('/xhr_proxy', function proxyXHR(request, response) {
        var requestURL = url.parse(unescape(request.query.rurl));

        request.headers.host = requestURL.host;
        // fixes encoding issue
        delete request.headers["accept-encoding"];

        var options = {
            host: requestURL.host,
            path: requestURL.path,
            port: requestURL.port,
            method: request.method,
            headers: request.headers
        };

        var proxyCallback = function (proxyReponse) {
            proxyReponse.pipe(response);
        };

        http.request(options, proxyCallback).end();
    });
};
