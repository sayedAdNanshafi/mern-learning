const fs = require('fs');
const http = require('http');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate');
const url = require('url');
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  if (req.url === '/' || req.url === '/overview') {
    const cardsHtml = dataObj.map((card) => replaceTemplate(tempCard, card)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.writeHead(200, {
      'content-type': 'text/html',
    });
    res.end(output);
  } else if (req.url === '/user') res.end('hey you are requesting user');
  else if (req.url === '/api') {
    res.writeHead(200, {
      'content-type': 'application/json',
    });
    res.end(data);
  } else if (pathname === '/product') {
    res.writeHead(200, {
      'content-type': 'text/html',
    });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  } else {
    res.writeHead(404, {
      'content-type': 'text/html',
    });
    res.end('<h1>Page Does Not Exist</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => console.log('hey your server is listening'));
