const express = require("express");
const app = express();
const album = require("./controller/album");
const favAlbum = require('./controller/favoriteAlbum')

app.use(express.json());

const port = 3333;

app.get('/api/albums', album.getAlbums);

app.get('/api/favorite-albums', favAlbum.getFavoriteAlbums)
app.post('/api/favorite-albums', favAlbum.selectFavorite);
app.put('/api/favorite-albums/:id', favAlbum.giveRating)
app.delete('/api/favorite-albums/:id', favAlbum.deleteAlbum)

app.listen(port, () => console.log(`Listening on port ${port}`));
