/*
- Title: Uptime Monitoring Api Raw Node
- Description: Uptime Monitoring Application
- Author: Maidul Bappy
- Date: 27/07/22
*/

// Dependencies
const http = require('http');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log('listening to port: 3000');
    });
};
// handle request response

app.handleReqRes = (req, res) => {
    // response handle
    res.end('Hello World');
};
