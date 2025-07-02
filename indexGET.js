import { readFile } from 'fs/promises';
import path from 'node:path';
import http from "http";

const server = http.createServer(async (req, res) => {
  const url = req.url;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  const fileName = String(url).split('?')[1]

  const data = await readFile(path.join(process.cwd(), String(`../node.js/${fileName}`).trim()), 'utf8');
  console.log(data)
  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
