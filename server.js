const express = require("express");
const app = express();

require('dotenv').config();

const externalUrl = process.env.RENDER_EXTERNAL_URL;
const port = externalUrl && process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/projekt3.html');
})



if (externalUrl) {
    const hostname = '127.0.0.1';
    app.listen(port, hostname, () => {
        console.log(`Server locally running at http://${hostname}:${port}/ and from
    outside on ${externalUrl}`);
    });
}
else {
    app.listen(port, () => {
        console.log("Started on port: " + port);
    });
}
