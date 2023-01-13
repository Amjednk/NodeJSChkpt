var http = require("http");
const myServer = http.createServer((request, response) => {
response.write("<html>")
response.write("<h1>Hello Node!!!</h1>\n")
response.write("</html>")
response.end();
});
myServer.listen(3000);