var apiBenchmark = require('api-benchmark');
var fs = require('fs');

var service_sanic = {
    japronto: "http://localhost:8080/"
};

var routes = {
    encode: {
        method: 'post',
        route: 'encode',
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            'text': 'value1'
        }
    },
    decode: {
        method: 'post',
        route: 'decode',
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            'text': 'dmFsdWUx'
        }
    }
};

apiBenchmark.measure(service_sanic, routes, {
            debug: false,
            runMode: 'parallel',
            maxConcurrentRequests: 10,
            delay: 0,
            minSamples: 8000,
            maxTime: 10,
            stopOnError: false
		},
        function(err, results){
        	apiBenchmark.getHtml(results, function(error, html){
        		fs.writeFileSync('benchmark-japronto.html', html);
        	});
});
