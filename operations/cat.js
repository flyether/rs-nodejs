import process from "process";
import path from "node:path";
import fs from "fs";

export const cat = async (dir, param) => {
  const file = path.resolve(dir, param);

  let readableStream = fs.createReadStream(file, "utf8");

  readableStream.on("open", () => {});

  readableStream.on("data", (data) => {
    console.log(data.toString());
  });
  readableStream.on("error", (err) => {
    console.log("Operation failed");
  });
};
