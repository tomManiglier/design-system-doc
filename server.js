const http = require('http');
const fs = require('fs');
const path = require('path');

const host = '0.0.0.0';
const port = Number(process.env.PORT || 5181);
const distDir = path.join(__dirname, 'dist');

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
};

function serveFile(filePath, response) {
  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(error.code === 'ENOENT' ? 404 : 500);
      response.end(error.code === 'ENOENT' ? 'Not found' : 'Internal server error');
      return;
    }

    response.writeHead(200, {
      'Content-Type': contentTypes[path.extname(filePath)] || 'application/octet-stream',
    });
    response.end(content);
  });
}

const server = http.createServer((request, response) => {
  const requestPath = request.url === '/' ? '/index.html' : request.url;
  const filePath = path.join(distDir, requestPath);

  if (!filePath.startsWith(distDir)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  // vue-router en mode history : toute route inconnue côté serveur doit
  // retomber sur index.html pour laisser le routeur client la gérer.
  fs.access(filePath, fs.constants.F_OK, (error) => {
    if (error) {
      serveFile(path.join(distDir, 'index.html'), response);
      return;
    }
    serveFile(filePath, response);
  });
});

server.listen(port, host, () => {
  console.log(`Serving dist on http://${host}:${port}`);
});
