const url = require('url');
const adr = 'http://localhost:8080/default.htm?year=2019&month=feb';

var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
