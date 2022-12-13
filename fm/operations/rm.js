import * as fs from "fs";
import path from "node:path";

export const rm = async (dir, Param) => {
  const file = path.resolve(`${dir}`, `${Param}`);

  fs.unlink(file, function (err) {
    console.log("Success");
    if (err) {
      console.log("Operation failed");
    }
  });
};
