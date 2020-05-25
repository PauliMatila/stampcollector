import React, { Component } from 'react'
import Stamp from './Stamp'

export class StampContainerData extends Component {
    render() {
        const pStyle = {
            font: '12px Arial center',
            textAlign: 'center',
        }

        const cStyle = {
            background: '#3baebd',
            font: '18px Arial',
            borderBottom: '1px solid black',
            borderTop: '1px solid black',
            textAlign: 'left'
        }

        var stamp = new Stamp();

        Object.assign(stamp, this.props.stamp);

        return (
            <div>
                <p style={pStyle}>Name</p>
                <p style={cStyle}>{stamp.name}</p>
                <p style={pStyle}>Price</p>
                <p style={cStyle}>{stamp.GetPriceString()}</p>
                <p style={pStyle}>Country</p>
                <p style={cStyle}>{stamp.country}</p>
                <p style={pStyle}>Year Published</p>
                <p style={cStyle}>{stamp.yearPublished}</p>
                <p style={pStyle}>Is Stamped</p>
                <p style={cStyle}>{String(stamp.isStamped)}</p>
            </div>
        )
    }
}

export default StampContainerData
