import React, { Component } from "react";

class FavoriteList extends Component {
    constructor(){
        super() 
        this.state = {
            ratingInput: ''
        }
        
    }

    handleInput=(val)=>{
        this.setState({ratingInput: val})
        
    }

    handleEdit=(id)=>{
        this.props.giveRating(id, this.state.ratingInput)
        this.setState({ratingInput: ''})
    }

  render() {
    const mappedAlbums = this.props.favoriteAlbums.map((album, index) => {
      return (
        <div key={index} className="singleFav">
          <img src={album.artworkUrl100} alt={album.collectionName} />
          <p>Rating: {album.rating}/10</p>
          <input value = {this.state.ratingInput} type="number" 
         min="1" max="10" onChange={(e)=>this.handleInput(e.target.value)}/>
          <button onClick={()=> this.handleEdit(album.id)}>Rate</button>
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
