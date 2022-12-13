import * as fs from "fs";
import path from "node:path";
import { pipeline } from "stream";
import zlib from "zlib";
import { promisify } from "util";

export const compress = async (dir, fileToCompressParam, newDirParam) => {
  const fileToCompress = path.resolve(`${dir}`, `${fileToCompressParam}`);
//   const extname = path.extname(fileToCompress);
//   let fileName = path.basename(fileToCompress, extname);
  let fileName = path.basename(fileToCompress);
  fileName = fileName + ".br";
  const newDir = path.resolve(`${dir}`, `${newDirParam}`, `${fileName}`);

  const readable = fs.createReadStream(fileToCompress);
  const writable = fs.createWriteStream(newDir);
  const brotli = zlib.createBrotliCompress();

  pipeline(readable, brotli, writable,  (err) => {
    if (err) {
      console.error("Operation failed");
    } else {
      console.log("Success.");
    }
  });
};
