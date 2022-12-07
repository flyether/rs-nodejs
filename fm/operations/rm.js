import * as fs from "fs/promises";
import path from "node:path";

export const rm = async (dir, oldName, newName) => {
  const oldFile = path.resolve(`${dir}`, `${oldName}`);
  const newFile = path.resolve(`${dir}`, `${newName}`);

  let fileWrong = await fs.stat(oldFile).catch((e) => {});
  let properFilename = await fs.stat(newFile).catch((e) => {});

  if (!fileWrong) {
    console.log(oldFile);
    console.log("no source file");
    return
  }
  if (properFilename) {
    console.log("a file with the same name already exists");
    return
  }

  await fs
    .rename(oldFile, newFile, {flag: 'wx'})
    .then(() => console.log("Success!"))
    .catch(() => {
      console.log("failed to rename");
    });
};
