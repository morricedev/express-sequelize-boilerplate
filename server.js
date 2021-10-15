const app = require("./app");
const port = process.env.APP_PORT;

app.listen(port, (error) => {
  if (error) {
    console.log(`\x1b[31m[-]\x1b[0m ${error}`);
  } else {
    console.log(`\x1b[32m[+]\x1b[0m Server listening on port ${port}`);
  }
});
