import React, {Component} from 'react'
import DisplayAlbum from '../components/DisplayAlbum'
import axios from 'axios'

class Display extends Component {
    constructor() {
        super()
        this.state = {
            beatlesAlbums: [], 
        }
    }

    componentDidMount() {
        this.getBeatlesAlbums()
    }

    getBeatlesAlbums = () => {
        axios
        .get('/api/albums')
        .then((res)=>{
            this.setState({beatlesAlbums: res.data})
        })
        .catch((err)=> console.log(err))
    }

    render(){
        const mappedAlbums = this.state.beatlesAlbums.map((album, i)=> (
          <DisplayAlbum
          key = {i}
          album = {album}
          selectFavorite = {this.props.selectFavorite}
          /> 
        ))
        return(
            <div className ="albums">
                {mappedAlbums}
            </div>
        )
    }
}

export default Display