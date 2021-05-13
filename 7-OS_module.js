const os = require("os");
// console.log(os);
console.log(os.homedir());

//info about current user
console.log(os.userInfo());

// method returns system uptime
console.log(os.uptime());

const currentOS = {
  name: os.userInfo(),
  uptime: os.uptime(),
  release: os.release(),
};
console.log(currentOS);
