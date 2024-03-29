const http = require('http');
const url = require('url');
const date = require('./modules/utilis.js');
const greetMessage = require('./lang/en/en');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;
  const landPage = greetMessage.greetOnLoad();

  if (pathname === '/COMP4537/labs/3/getDate' && query.name) {
    const name = query.name;
    const currentTime = date.getDate();
    const response = `<h1 style = "color: blue;">${greetMessage.greetWithName(name)} ${currentTime}</h1>`;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(response);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(landPage);
    }

  }).listen(process.env.PORT || 3000);

  console.log(`Server is running on port 3000`);
