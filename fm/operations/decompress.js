import * as fs from "fs";
import path from "node:path";
import { pipeline } from "stream";
import zlib from "zlib";
import { promisify } from "util";

export const decompress = async (dir, fileFromCompressParam, newDirParam) => {
  const fileFromCompress = path.resolve(`${dir}`, `${fileFromCompressParam}`);

  let fileName = path.basename(fileFromCompress);
  fileName = fileName.replace('.br','');
  const newDir = path.resolve(`${dir}`, `${newDirParam}`, `${fileName}`);

  const readable = fs.createReadStream(fileFromCompress);
  const writable = fs.createWriteStream(newDir);
  const brotli = zlib.createBrotliDecompress();;

  pipeline(readable, brotli, writable,  (err) => {
    if (err) {
      console.error("Operation failed");
    } else {
      console.log("Success.");
    }
  });
};
