import React, { Component } from 'react'

export class StampContainerData extends Component {
    render() {
        return (
            <div>
                <p>name={this.props.name} yearPublished={this.props.yearPublished} isStamped={this.props.isStamped} </p>    
            </div>
        )
    }
}

export default StampContainerData
