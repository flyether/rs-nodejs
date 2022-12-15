import * as fs from "fs/promises";
import path from "node:path";

export const rn = async (dir, oldName, newName) => {
  const oldFile = path.resolve(dir, oldName);
  const newFile = path.resolve(dir, newName);

  await fs
    .rename(oldFile, newFile, {flag: 'wx'})
    .then(() => console.log("Success!"))
    .catch(() => {
      console.log("Operation failed");
    });
};
