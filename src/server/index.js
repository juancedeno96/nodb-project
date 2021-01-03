const express = require("express");
const app = express();
const album = require("./controller/album");

app.use(express.json());

const port = 3333;

app.get('/api/albums', album.getAlbums);

app.listen(port, () => console.log(`Listening on port ${port}`));
