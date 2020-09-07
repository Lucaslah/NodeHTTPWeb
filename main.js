const express = require('express');
const server = express();
const port = 5000;

server.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.get("/json", (req, res) => {
    res.json({ message: "JSON DATA IS NOT WORKING YET!" });
});

server.listen(port, () => {
    console.log(`Node HTTP Web Server is running at at http://localhost:${port}`);
});
