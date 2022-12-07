import * as fs from "fs/promises";
import path from "node:path";

export const add = async (dir, param) => {
  const newDir = path.resolve(`${dir}`, `${param}`);
  try {
    await fs.writeFile(newDir, "", { flag: "wx" });
    console.log("the file has been created, look in the desired directory");
  } catch (error) {
   console.log("Operation failed");
  }
};
