import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import Display from "./components/Display";
import FavoriteList from "./components/FavoriteList";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      favoriteAlbums: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/favorite-albums")
      .then((res) => {
        this.setState({ favoriteAlbums: res.data });
      })
      .catch((err) => console.log(err));
  }

  selectFavorite = (album) => {
    axios
      .post("/api/favorite-albums", { album: album })
      .then((res) => {
        this.setState({ favoriteAlbums: res.data });
      })
      .catch((err) => console.log(err));
  };

  giveRating = (id, newRating) => {
    let body = { rating: newRating };
    axios
      .put(`/api/favorite-albums/${id}`, body)
      .then((res) => {
        this.setState({ favoriteAlbums: res.data });
      })
      .catch((err) => console.log(err));
  };

  deleteAlbum = (id) => {
    axios
      .delete(`/api/favorite-albums/${id}`)
      .then((res) => {
        this.setState({ favoriteAlbums: res.data });
      })
      .catch((err) => console.log(err));
  };
  render() {
    console.log(this.state.favoriteAlbums);
    return (
      <div>
        <Header />
        <div className="App">
          <Display selectFavorite={this.selectFavorite} />
          <FavoriteList
            favoriteAlbums={this.state.favoriteAlbums}
            deleteAlbum={this.deleteAlbum}
          />
        </div>
      </div>
    );
  }
}

export default App;
