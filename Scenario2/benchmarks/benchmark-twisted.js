var apiBenchmark = require('api-benchmark');
var fs = require('fs');

var service_twisted = {
    twisted: "http://localhost:8083/"
};

var routes = {
    save: {
        method: 'post',
        route: 'save',
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            'text': `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.`
        }
    },
    fetch: {
        method: 'post',
        route: 'fetch',
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            'id': `595bd7c705889881c79b74ec`
        }
    }
};

apiBenchmark.measure(service_twisted, routes, {
            debug: false,
            runMode: 'parallel',
            maxConcurrentRequests: 10,
            delay: 0,
            minSamples: 8000,
            maxTime: 100000,
            stopOnError: false
		},
        function(err, results){
        	apiBenchmark.getHtml(results, function(error, html){
        		fs.writeFileSync('output/benchmark-twisted.html', html);
        	});
});
