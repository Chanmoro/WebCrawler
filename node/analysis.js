// For more information .
// https://github.com/cheeriojs/cheerio
var fs = require('fs');
var cheerio = require('cheerio');
var jschardet = require('jschardet');
var iconv  = require('iconv').Iconv;

if (process.argv.length !== 3) {
	console.log('wrong argument.');
	return;
}

var fileName = process.argv[2];
var targetHtml = fs.readFileSync(fileName);

// Encoding to utf8 string.
var detectResult = jschardet.detect(targetHtml);
var conv = new iconv(detectResult.encoding, 'UTF-8//TRANSLIT//IGNORE');
var htmlStringUtf8 = conv.convert(targetHtml).toString();

// Converting to jQuery object.
$ = cheerio.load(htmlStringUtf8);

// Extract information from html.
var title = $('title').text();
var description = $("meta[name=description]").attr("content");

// Build tsv text.
var record = title;
record += "\t" + description;

// Output to stdout.
console.log(record);
