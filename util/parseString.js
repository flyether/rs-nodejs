

export const parseString = (str) => {
  str = str.replace(/^ +| +$|( ) +/g, "$1").trim();

  if ((str.includes('"') && str.includes("'")) || str.includes("'")) {
    str = str.replace(/'/g, '"');
  }

  let arr = str.split(" ");
  let a = arr.shift();
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    let arg = "";
    if (arr[i].substring(0, 1) === '"') {
      arg = arr[i].substring(1);
      while (i < arr.length && arr[i].slice(-1) !== '"') {
        i++;
        arg += " " + arr[i];
      }
      if (arg.slice(-1) === '"') {
        arg = arg.slice(0, -1);
      } else {
        console.log("invalid input");
      }
    } else {
      arg = arr[i];
    }
    resArr.push(arg);
  }

  return {
    operation: a,
    parameters: resArr,
  };
};
