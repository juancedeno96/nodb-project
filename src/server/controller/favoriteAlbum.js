const favoriteAlbums = [];
let id = 1

module.exports = {
    getFavoriteAlbums: (req, res) => {
        res.status(200).send(favoriteAlbums)
    },

    selectFavorite: (req, res) => {
        const {album} = req.body;
        album.id = id;
        id++;
        favoriteAlbums.push(album)
        res.status(200).send(favoriteAlbums)
    },

    giveRating: (req, res) => {
        const {id} = req.params
        const {rating} = req.body
        const albums = favoriteAlbums.find(element => element.id === +id);
        albums.rating = rating
        res.status(200).send(favoriteAlbums)
    },

    deleteAlbum: (req, res) => {
        const {id} = req.params;
        const index = favoriteAlbums.findIndex(element => element.id=== +id);
        favoriteAlbums.splice(index, 1)
        res.status(200).send(favoriteAlbums)
    },
}