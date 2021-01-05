import React, { Component } from "react";

class DisplayAlbum extends Component {
  handleFavorite = () => {
    const { album } = this.props;
    let newAlbum = {
      collectionName: album.collectionName,
      artworkUrl100: album.artworkUrl100,
      rating: album.rating,
    };
    this.props.selectFavorite(newAlbum);
  };
  render() {
    return (
      <div className="singleAlbum" onClick={this.handleFavorite}>
        <img
          src={this.props.album.artworkUrl100}
          alt={this.props.album.collectionName}
        />
        <p>{this.props.album.collectionName}</p>
      </div>
    );
  }
}

export default DisplayAlbum;
