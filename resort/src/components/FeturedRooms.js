import React, { Component } from 'react'
import { RoomContext } from '../context'

export default class FeturedRooms extends Component {
  static contextType = RoomContext
  render() {
    const{FeturedRooms: rooms} = this.context
    console.log(rooms)
    return (
      <div>  from FeaturedRooms </div>
    )
  }
}
