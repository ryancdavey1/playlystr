import React, { Component } from 'react'
import AllPlaylists from './AllPlaylists';
import FavoritePlaylists from './FavoritePlaylists';
import AddPlaylist from './AddPlaylist';

export default class PlaylistLister extends Component {

  constructor() {
    super();
    this.state = {
      playlists: [{name: "New Playlist 1"}, {name: "tstds"}, {name: "potato"}]
    }
  }

  handleSubmit = (e, playlist) => {
    e.preventDefault();
    console.log(playlist);
    this.setState((state) => {
      //add a new playlist through the new name
      return {playlists: [...state.playlists, playlist]}
    
    });
  }

  getSampleTracks() {
    fetch('https://api.spotify.com/v1/search')
  }

  render() {
    //this.getSampleTracks();
    return (
      <div>
        <AllPlaylists playlists={this.state.playlists}/>
        <FavoritePlaylists/>
        <AddPlaylist handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
