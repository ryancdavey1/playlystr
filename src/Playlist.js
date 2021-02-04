import React, { Component } from 'react'

export default class Playlist extends Component {

  // componentDidMount() {
  //   this.setState({
  //     name: this.props.name
  //   })
  // }

  // you never want to set state to props
  // NO DERIVED STATE

  render() {
    return (
      <div>
        <h1>{this.props.playlist.name}</h1>
      </div>
    )
  }
}
