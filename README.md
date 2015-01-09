# WebCrawler
Web crawler implemented with PhantomJS and node.js.

## crawler.js
Running crawler.js on PhantomJS is used for getting a rendered html .
## analysis.js
Running analysis.js on node.js is used for parsing a html file .

# Useage
phantomjs crawler.js tagetUrl outputFilePath

node analysis.js targetHtmlFile

# Example
phantomjs crawler.js http://www.google.com path/to/file.html

node analysis.js path/to/file.html
