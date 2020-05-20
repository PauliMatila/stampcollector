import React, { Component } from 'react'
import StampContainerImage from './StampContainerImage'
import StampContainerData from './StampContainerData'

export class StampContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showFull: false
    }
  }
  
  render() {   
    const{name, yearPublished, isStamped, imageUrl} = this.props.Stamp    
    return (
      <div>
        <div className='StampContainerHeader'>{name}</div>        
        <StampContainerImage imageUrl={imageUrl}/>
        <StampContainerData name={name} yearPublished={yearPublished} isStamped={isStamped}/>
      </div>
    )
  }
}

export default StampContainer
