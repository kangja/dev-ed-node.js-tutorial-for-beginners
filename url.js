const url = require("url");

const address = "http://google.com/jason?year=1998&month=august";

const parsedUrl = url.parse(address, true);

// console.log(parsedUrl.host);
// console.log(parsedUrl.pathname);
// console.log(parsedUrl.query);
console.log(parsedUrl.query.month);
