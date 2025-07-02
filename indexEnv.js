import { readFile } from 'fs/promises';
import path from 'node:path';
import dotenv from 'dotenv';

dotenv.config();
const fileName = process.env.FILE_NAME;

const getText = async () => {

  const data = await readFile(path.join(process.cwd(), String(`../node.js/${fileName}`).trim()), 'utf8');;
  console.log(data)
  return data;
};

getText(fileName)




