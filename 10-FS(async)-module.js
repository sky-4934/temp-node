const fs = require("fs");

fs.readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("error occured");
  }
  const first = result;

  fs.readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log("error occured");
    }
    const second = result;

    fs.writeFile(
      "./content/resulta.txt",
      `here is the result ${first} and ${second}`,
      (err, result) => {
        if (err) {
          return err;
        }
        console.log(result);
      }
    );
  });
});
