import React, { Component } from "react";

class FavoriteList extends Component {
  render() {
    const mappedAlbums = this.props.favoriteAlbums.map((album, index) => {
      return (
        <div key={index} className="singleFav">
          <img src={album.artworkUrl100} alt={album.collectionName} />
          {album.rating}
          <p>
            <button onClick={() => this.props.deleteAlbum(album.id)}>
              Remove
            </button>
          </p>
        </div>
      );
    });
    return <div className="favorites">{mappedAlbums}</div>;
  }
}
export default FavoriteList;
