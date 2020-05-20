import React, { Component } from 'react'
import Header from './Header'
import StampContainer from './StampContainer'
import './MainWindow.css'

export class MainWindow extends Component {
  render() {
    return (
      <div>
        <Header/>
        <p>This is main window.</p>
        <StampContainer Stamp={this.props.stampCollection[0]}/>
        <StampContainer Stamp={this.props.stampCollection[1]}/>
        <StampContainer Stamp={this.props.stampCollection[2]}/>
      </div>
    )
  }
}

export default MainWindow
