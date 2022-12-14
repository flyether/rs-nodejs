import os from "os";

export const osFunc = async (param) => {
  switch (param.toLowerCase()) {
    case "--eol":
      console.log(JSON.stringify(os.EOL));
      break;

    case "--cpus":
      let info = {
        data: os.cpus().map((core) => ({
          model: core.model,
          speed: `${(core.speed / 1000).toFixed(1)} GHz`,
        })),
      };
      console.table(info.data);
      break;

    case "--homedir":
      console.log(os.homedir());
      break;

    case "--username":
      console.log(os.userInfo().username);
      break;

    case "--architecture":
      console.log(os.arch());
      break;

    default:
      console.log("Operation failed");
      break;
  }
};
