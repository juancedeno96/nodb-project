const data = require('../controller/data.json')

module.exports = {
getAlbums: (req, res) => {
    res.status(200).send(data)
}

}