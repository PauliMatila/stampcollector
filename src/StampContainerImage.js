import React, { Component } from 'react'


export class StampContainerImage extends Component {
  render() {
    return (
      <div>
        <img width='500px' height='500px' src={this.props.imageUrl} alt="" />
      </div>
    )
  }
}

export default StampContainerImage
