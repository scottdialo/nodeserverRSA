////inport your http
const http = require("http");
//create your server
const server = http.createServer((req, res) => {
  console.log("Server is created!");
});

//listen to port
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
