// Read official documentation for more information .
// http://phantomjs.org/api/
var fs = require('fs');
var system = require('system');
var page = require('webpage').create();

if(system.args.length !== 3){
	console.log('wrong argument.');
	phantom.exit(0);
}

// system.args[0] is this script file name.
var targetUrl = system.args[1];
var outputFilePath = system.args[2];

// Opening Url and rendering web page.
page.open(targetUrl , function(status) {
	if (status !== 'success') {
		console.log('request failed!  URL: ' + targetUrl);
		phantom.exit(1);
	}
	
	// page.content stores the content of the rendered web page HTML.
	var content = page.content;
	
	// Write to local file.
	try {
		fs.write(outputFilePath, content, 'w');
	} catch(e) {
		console.log(e);
	}
	
	// You should call phantom.exits() to exits this program.
	phantom.exit(0);
});