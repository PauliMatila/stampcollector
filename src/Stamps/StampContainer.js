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

  headerClicked() {
    if(this.state.showFull === false) {
      this.setState({showFull: true})} 
    else {
      this.setState({showFull: false})}   
  }

  render() {   
    const{name, imageUrl} = this.props.Stamp
    return (
      <div className='row containerStyle'>
        <div onClick={() => this.headerClicked()}>{name}</div>
        <div hidden={!this.state.showFull}>
          <div >
            <div className='col-lg-4'>
              <StampContainerImage 
              imageUrl={imageUrl}/>
            </div>

            <div className='col-lg-8'>
              <StampContainerData
              stamp={this.props.Stamp}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StampContainer
