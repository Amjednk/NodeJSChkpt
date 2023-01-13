var fs = require('fs');
fs.writeFile('welcome.txt',"Hello Node", function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
});

fs.readFile('Hello.txt', (err, data) => {
    if (err)
    console.error(err);
    console.log(data.toString());
});