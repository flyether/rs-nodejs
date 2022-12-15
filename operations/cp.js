import * as fs from "fs";
import path from "node:path";
import { pipeline } from "stream";

export const cp = async (dir, fileToCopyParam, newDirParam) => {
  const fileToCopy = path.resolve(dir, fileToCopyParam);
  const fileName = path.basename(fileToCopy);
  const newDir = path.resolve(dir, newDirParam, fileName);

  const readable = fs.createReadStream(fileToCopy, {
    encoding: "utf8",
    // highWaterMark: 16 * 1024,
  });
  const writable = fs.createWriteStream(newDir);

  pipeline(readable, writable, (err) => {
    if (err) {
      console.error("Operation failed");
    } else {
      console.log("succeeded.");
    }
  });
};
