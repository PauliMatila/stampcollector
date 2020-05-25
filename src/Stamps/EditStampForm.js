import React, { Component } from 'react'




export class EditStampForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: stamp.name,
      price: stamp.price,
      country: stamp.country,
      yearPublished: stamp.yearPublished,
      isStamped: stamp.isStamped,
      imageUrl: stamp.imageUrl
    }
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default EditStampForm