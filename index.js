import { readFile } from 'fs/promises';
import path from 'node:path';

process.stdin.resume();

const getText = async (fileName) => {
  const data = await readFile(path.join(process.cwd(), String(`../node.js/${fileName}`).trim()), 'utf8');
  console.log(data)
  return data;
};

process.stdin.on('data', function(data) {
  getText(data)
});




