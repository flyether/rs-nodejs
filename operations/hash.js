import { createHash } from 'node:crypto'
import * as fs from 'node:fs/promises';
import path from "node:path";

export const hash = async (dir, param) => {
  const fileToHash = path.resolve(dir, param);
  try {
   const  content = await fs.readFile(fileToHash)
  console.log(createHash('sha256').update(content).digest('hex'));
  } catch (error) {
   console.log("Operation failed");
  }
};
