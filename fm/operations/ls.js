import * as fs from "fs/promises";

export const ls = async (dir) => {
  let folderArr = [];
  let fileArr = [];
  const folder = await fs.stat(dir).catch((e) => {});

  if (!folder) {
    throw new Error("Path does not exist");
  } else {
    for (let elem of await fs.readdir(dir, { withFileTypes: true })) {
      if (elem.isDirectory()) {
        folderArr.push({ name: elem.name, type: "directory" });
      } else if (elem.isFile(elem)) {
        fileArr.push({ name: elem.name, type: "file" });
      }
    }

    folderArr.sort((a, b) => a.name - b.name);
    fileArr.sort((a, b) => a.name - b.name);

    console.table(folderArr.concat(fileArr));
  }
};
