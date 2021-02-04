import React, { Component } from 'react'

export default class AddPlaylist extends Component {

  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  handleChange = (e) => {
    //console.log(e.target.value);
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    this.props.handleSubmit(e, this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    //console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Playlist Name" onChange={this.handleChange} value={this.state.name}/>
          <button type="submit">Create Playlist</button>
        </form>
      </div>
    )
  }
}
