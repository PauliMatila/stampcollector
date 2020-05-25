import React, { Component } from 'react'
import StampContainer from './Stamps/StampContainer'
import './MainWindow.css'
import './Stamps/EditStampForm'

export class MainWindow extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      dataManager: '',
      stampCollection: this.props.stampCollection
    }
  }

  AddStampToCollection() {}

  UpdateCollection = (e) => this.setState({[e.target.StampContainer]: e.target.Stamp})
  
  render() {
    return (
      <div className='mainWindow'>
        <p>This is stamp list container.</p>
        <StampContainer Stamp={this.state.stampCollection[0]}/>
        <StampContainer Stamp={this.state.stampCollection[1]}/>
        <StampContainer Stamp={this.state.stampCollection[2]}/>
      </div>
    )
  }
}

export default MainWindow
