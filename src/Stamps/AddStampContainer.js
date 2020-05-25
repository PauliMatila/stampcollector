import React, { Component } from 'react'
import EditStampForm from './EditStampForm'

export class AddStampContainer extends Component {
    render() {
        return (
            <div>
                <EditStampForm stamp={this.props.Stamp}/>
            </div>
        )
    }
}

export default AddStampContainer
