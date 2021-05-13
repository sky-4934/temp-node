const fs = require("fs");

const first = fs.readFileSync("./content/first.txt", "utf-8");
const second = fs.readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

fs.writeFileSync(
  "./content/result-sync.txt",
  `the dta is first ${first} and ${second}`
);
