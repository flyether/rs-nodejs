import process from "process";
import path from "node:path";
import { open } from "fs/promises";

export const cat = async (dir, param) => {
  const newDir = path.resolve(`${dir}`, `${param}`);

  try {
    const fo = await open(newDir);
    const stream = fo.createReadStream({ encoding: "utf8" , flag: 'wx'});

    stream.pipe(process.stdout);
  } catch {
    console.log("Operation failed");
  }
};
