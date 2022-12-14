#!/usr/bin/env node

import * as readline from "node:readline/promises";
import { mapArgs } from "./util/mapArg.js";
import { dirname } from "node:path";
import { stdin as input, stdout as output } from "process";
import os from "os";
import { parseString } from "./util/parseString.js";
import { cd } from "./operations/cd.js";
import { cat } from "./operations/cat.js";
import { ls } from "./operations/ls.js";
import { add } from "./operations/add.js";
import { rn } from "./operations/rn.js";
import { osFunc } from "./operations/os.js";
import { cp } from "./operations/cp.js";
import { mv } from "./operations/mv.js";
import { rm } from "./operations/rm.js";
import { hash } from "./operations/hash.js";
import { compress } from "./operations/compress.js";
import { decompress } from "./operations/decompress.js";

let userHomeDir = os.homedir();

const rl = readline.createInterface({ input, output });

const args = mapArgs(process.argv.slice(2));
const username = args["--username"] || "nameless hottie";

console.log(`Welcome to the File Manager, ${username}`);

console.log(`You are currently in  ${userHomeDir}`);

rl.on("line", async (input) => {
  const parseInput = parseString(input);
  switch (parseInput.operation) {
    case "up":
      userHomeDir = dirname(userHomeDir);
      break;
    case "cd":
      if (parseInput.parameters == "..") {
        userHomeDir = dirname(userHomeDir);
        г;
      } else {
        userHomeDir = await cd(userHomeDir, parseInput.parameters);
      }
      break;
    case "ls":
      await ls(userHomeDir);
      break;
    case "cat":
      await cat(userHomeDir, parseInput.parameters);
      break;
    case "add":
      await add(userHomeDir, parseInput.parameters);
      break;
    case "rn":
      await rn(userHomeDir, parseInput.parameters[0], parseInput.parameters[1]);
      break;
    case "cp":
      await cp(userHomeDir, parseInput.parameters[0], parseInput.parameters[1]);
      break;
    case "mv":
      await mv(userHomeDir, parseInput.parameters[0], parseInput.parameters[1]);
      break;
    case "rm":
      await rm(userHomeDir, parseInput.parameters);
      break;
    case "os":
      await osFunc(parseInput.parameters[0]);
      break;

    case "hash":
      await hash(userHomeDir, parseInput.parameters);
      break;
    case "compress":
      await compress(
        userHomeDir,
        parseInput.parameters[0],
        parseInput.parameters[1]
      );
      break;
    case "decompress":
      await decompress(
        userHomeDir,
        parseInput.parameters[0],
        parseInput.parameters[1]
      );
      break;
    case ".exit":
      console.log(`Thank you for using File Manager, ${username}, goodbye!`);
      rl.close();
      break;
    default:
      console.log("не команда а хуйня, в смысле: Operation failed");
      break;
  }
  console.log(`You are currently in ${userHomeDir}`);
});

rl.on("SIGINT", () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  rl.close();
});
