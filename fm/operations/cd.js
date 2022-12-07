import path from "node:path";
import * as fs from "node:fs/promises";

export const cd = async (userHomeDirect, param) => {
  if(param == ''){
    console.log("invalid input");
    return
  }
  const newDir = path.resolve(`${userHomeDirect}`, `${param}`);
  let st = await fs.stat(newDir).catch((err) => {
    console.log("invalid input");
  });
  if (st) {
    return newDir;
  } else {
    console.log("invalid input");
    return userHomeDirect;
  }
};
