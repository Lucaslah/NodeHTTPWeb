/* Import Express */
const express = require('express');
/* Make a new express instance */
const server = express();
/* Get the Port for the server to run on from the env or use port 5000 */
const port = process.env.PORT || 5000;

/* Get Home Page */
server.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

/* Example json */
server.get("/json", (req, res) => {
    res.json({ message: "Some JSON Data" });
});

/* Start the Express Server */
server.listen(port, () => {
    console.log(`Node HTTP Web Server is running at at http://localhost:${port}`);
});
