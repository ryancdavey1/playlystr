import React, { Component } from 'react'
import Playlist from './Playlist';

export default class AllPlaylists extends Component {

  // this.props.playlists.map((playlist) => <Playlist playlist={playlist})

  render() {
    return (
      <div>
        <h1>All Playlists: </h1>
        {this.props.playlists.map(playlist => <Playlist playlist={playlist}/>)}
      </div>
    )
  }
}
